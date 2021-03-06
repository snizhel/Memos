const express = require("express");
const app = express();
const body = require("body-parser");
const cors = require('cors');
const config = require('./config')
app.use(body.json());
app.use(cors());

const admin = require('firebase-admin');
const serviceAccount = require('../key.json');
const databaseURL = "https://memos-95257-default-rtdb.firebaseio.com/"
function init() {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: databaseURL
        });
        console.log("database is connected!");
    } catch (err) {
        console.log("connect to server failed!");
    }
    try {
        app.listen(config.PORT, config.HOST, () => {
            console.log(`server is running on ${config.HOST}:${config.PORT}`);
        });
    } catch (err) {
        console.log(err);
    }
}
init();

app.get("/notes", async (req, res) => {
    let test = []
    // admin.firestore().collection('user').doc("user").collection("notes").doc
    await admin.firestore().collection("user").doc("user1").collection("notes").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            test.push(doc.data());
        });
    });
    await res.send(test);
})
app.get("/notes/id", async (req, res) => {
    let { id } = req.query;
    let temp;
    temp = await admin.firestore().collection("user").doc("user1").collection("notes").doc(id).get();
    res.send(temp.data());
})
app.put("/notes/id/update/color", (req, res) => {
    let { id, color } = req.body;
    admin.firestore().collection("user").doc("user1").collection("notes").doc(id.toString()).update({
        color: color
    });
})

app.put("/notes/id/update/img", async (req, res) => {
    let { id, img } = req.body;
    admin.firestore().collection("user").doc("user1").collection("notes").doc(id.toString()).update({
        imagePreview: img
    });

})

app.delete("/notes/id/delete", async (req, res) => {
    let { id } = req.query;
    // console.log(id);
    await admin.firestore().collection("user").doc("user1").collection("notes").doc(id.toString()).delete();
})
app.put("/notes/id/update/pin", async (req, res) => {
    let { id, pin } = req.body;
    let temp;
    temp = await admin.firestore().collection("user").doc("user1").collection("notes").doc(id).update({
        id: id,
        pin: pin
    });
    res.send(temp);
})


app.get("/id", async (req, res) => {
    temp = (await admin.firestore().collection("user").doc("user1").collection("id").doc("id").get()).data();
    res.send(temp);
})
app.post("/notes/create", async (req, res) => {
    let { id, num, title, description, pin, labels, date, time,
        selectedColor, color, imagePreview, todoList, arhieved, showTodo, trash } = req.body;
    // temp = (await admin.firestore().collection("user").doc("user1").collection("id").doc("id").get()).data();
    let data = {
        id: id,
        num: num,
        title: title,
        description: description,
        pin: pin,
        labels: labels,
        // date: Date.now(),
        // time: time,
        selectedColor: selectedColor,
        color: color,
        imagePreview: imagePreview,
        todoList: todoList,
        showTodo: showTodo,
        arhieved: arhieved,
        trash: trash
    };

    admin.firestore().collection("user").doc("user1").collection("notes").doc(data.id).create(data);
    // admin.firestore().collection("user").doc("user1").collection("id").doc("id").update({
    //     id: parseInt(temp.id) + 1,
    // });
})

app.post("/notes/tranferToFlag", async (req, res) => {
    let { id, num, title, description, pin, labels, date, time,
        selectedColor, color, imagePreview, todoList, arhieved, showTodo, trash } = req.body;

    let data = {
        id: id,
        num: num,
        title: title,
        description: description,
        pin: pin,
        labels: labels,
        // date: Date.now(),
        // time: time,
        selectedColor: selectedColor,
        color: color,
        imagePreview: imagePreview,
        todoList: todoList,
        showTodo: showTodo,
        arhieved: arhieved,
        trash: trash
    };

setTimeout(()=>{
    admin.firestore().collection("user").doc("user1").collection("notes").doc(id).delete();
},500)
    
    admin.firestore().collection("user").doc("user1").collection("flags").doc(id).create(data);
})

app.post("/flags/tranferToNotes", async (req, res) => {
    let { id, num, title, description, pin, labels, date, time,
        selectedColor, color, imagePreview, todoList, arhieved, showTodo, trash } = req.body;
    let data = {
        id: id,
        num: num,
        title: title,
        description: description,
        pin: pin,
        labels: labels,
        // date: Date.now(),
        // time: time,
        selectedColor: selectedColor,
        color: color,
        imagePreview: imagePreview,
        todoList: todoList,
        showTodo: showTodo,
        arhieved: arhieved,
        trash: trash
    };
    setTimeout(()=>{
        admin.firestore().collection("user").doc("user1").collection("flags").doc(id).delete();
    },500)

    admin.firestore().collection("user").doc("user1").collection("notes").doc(id).create(data);
})
app.post("/flags/create", (req, res) => {
    let { id, num, title, description, pin, labels, date, time,
        selectedColor, color, imagePreview, todoList, arhieved, showTodo, trash } = req.body;
    let data = {
        id: id,
        num: num,
        title: title,
        description: description,
        pin: pin,
        labels: labels,
        // date: Date.now(),
        // time: time,
        selectedColor: selectedColor,
        color: color,
        imagePreview: imagePreview,
        todoList: todoList,
        showTodo: showTodo,
        arhieved: arhieved,
        trash: trash
    };
    admin.firestore().collection("user").doc("user1").collection("flags").doc(id.toString()).create(data);
})

app.get("/flags", async (req, res) => {
    let test = []
    await admin.firestore().collection("user").doc("user1").collection("flags").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            test.push(doc.data());
        });
    });
    await res.send(test);
});
app.put("/flags/id/update/img", async (req, res) => {
    let { id, img, pin } = req.body;
    switch (pin) {
        case false: {
            admin.firestore().collection("user").doc("user1").collection("notes").doc(id.toString()).update({
                imagePreview: img
            });
            break;
        }
        case true: {
            admin.firestore().collection("user").doc("user1").collection("flags").doc(id.toString()).update({
                imagePreview: img
            });
            break;
        }
        default:
            console.log("cant update img");
    }


})


app.get("/flags/id", async (req, res) => {
    let { id } = req.query;
    let temp;
    temp = await admin.firestore().collection("user").doc("user1").collection("flags").doc(id).get();
    res.send(temp.data());
})
app.delete("/flags/id/delete", async (req, res) => {
    let { id } = req.query;
    await admin.firestore().collection("user").doc("user1").collection("flags").doc(id.toString()).delete();

})
app.put("/flags/id/update/color", async (req, res) => {
    let { id, color } = req.body;
    admin.firestore().collection("user").doc("user1").collection("flags").doc(id.toString()).update({
        color: color
    });
})




app.post("/archives/create", async (req, res) => {
    let { id, num, title, description, pin, labels, date, time,
        selectedColor, color, imagePreview, todoList, arhieved, showTodo, trash } = req.body;
    let data = {
        id: id,
        num: num,
        title: title,
        description: description,
        pin: pin,
        labels: labels,
        // date: Date.now(),
        // time: time,
        selectedColor: selectedColor,
        color: color,
        imagePreview: imagePreview,
        todoList: todoList,
        showTodo: showTodo,
        arhieved: arhieved,
        trash: trash
    };
    admin.firestore().collection("user").doc("user1").collection("archives").doc(id.toString()).create(data);
})
app.get("/archives", async (req, res) => {
    let test = []
    // res.send("history");
    await admin.firestore().collection("user").doc("user1").collection("archives").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            test.push(doc.data());
        });
    });
    await res.send(test);
})

app.get("/archives/id", async (req, res) => {
    let { id } = req.query;
    let temp;
    temp = await admin.firestore().collection("user").doc("user1").collection("archives").doc(id).get();
    res.send(temp.data());
})
app.delete("/archives/id/delete", async (req, res) => {
    let { id } = req.query;
    let temp;
    temp = await admin.firestore().collection("user").doc("user1").collection("archives").doc(id).delete();
    res.send(temp);
})
app.put("/archives/id/update/color", async (req, res) => {
    let { id, color } = req.body;
    admin.firestore().collection("user").doc("user1").collection("archives").doc(id.toString()).update({
        color: color
    });

})
app.put("/archives/id/update/img", async (req, res) => {
    let { id, img } = req.body;
    let temp;
    temp = await admin.firestore().collection("user").doc("user1").collection("archives").doc(id).update({
        id: id,
        imagePreview: img
    });
    res.send(temp);
})





app.post("/trashs/create", async (req, res) => {
    let { id, num, title, description, pin, labels, date, time,
        selectedColor, color, imagePreview, todoList, arhieved, showTodo, trash } = req.body;
    let data = {
        id: id,
        num: num,
        title: title,
        description: description,
        pin: pin,
        labels: labels,
        // date: Date.now(),
        // time: time,
        selectedColor: selectedColor,
        color: color,
        imagePreview: imagePreview,
        todoList: todoList,
        showTodo: showTodo,
        arhieved: arhieved,
        trash: trash
    };
    admin.firestore().collection("user").doc("user1").collection("trashs").doc(id.toString()).create(data);
})
app.get("/trashs", async (req, res) => {
    let test = []
    // res.send("history");
    await admin.firestore().collection("user").doc("user1").collection("trashs").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            test.push(doc.data());
        });
    });
    await res.send(test);
})

app.get("/trashs/id", async (req, res) => {
    let { id } = req.query;
    let temp;
    temp = await admin.firestore().collection("user").doc("user1").collection("trashs").doc(id).get();
    res.send(temp.data());
})
app.delete("/trashs/id/delete", async (req, res) => {
    let { id } = req.query;
    let temp;
    temp = await admin.firestore().collection("user").doc("user1").collection("trashs").doc(id).delete();
    res.send(temp);
})
app.delete("/trashs/id/delete/all", async (req, res) => {
    let temp;

    // console.log("delete all")
    await admin.firestore().collection("user").doc("user1").collection("trashs").doc().then((data) => {
        console.log("Document successfully deleted")
    });
    await res.send(test);
    // res.send(temp);
})