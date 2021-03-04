import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { NoteService } from "./note.service"
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private noteSer: NoteService, public fire: AngularFirestore, private fireData: AngularFireStorage) { }
  checkEmail(email: string) {
    let user1 = this.noteSer.getUserMail;
    let user = email;
    if (user1 == user) {
      console.log("same user!")
    } else {
      let data: any;
      this.fire.collection("user").doc(user).valueChanges().subscribe((temp) => {
        data = temp;
        if (data == undefined) {
          console.log("can't get shared");
        } else {
          this.fire.collection("user").doc(user).collection("shared").doc(user1).set({ email: user1 })
        }
      });
    }

  }

}
