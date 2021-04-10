import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from  '@angular/fire/firestore';
import { BaseDatabaseModels } from '../models/dto';
import * as firebase from 'firebase';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
    userid:any;
  constructor(private store: AngularFirestore) { 
  this.userid=1;
  }
  public createId<T extends BaseDatabaseModels>(collection:string, data:T): Promise<void>{
      return this.store.doc<T>(`${collection}/${data.id}`).set(this.addCreated(data)); 
  };

  public update<T extends BaseDatabaseModels>(collection:string,id:string,document:Partial<T>): Promise<void>{
    return this.store.doc<T>(`${collection}/${id}`).update(this.updateCreated(document));
  
  };

  public updateField <T extends BaseDatabaseModels>(collection:string,subCollectionName:string, id:string,document:Partial<T>): Promise<any>{
    return this.store.collection(collection).doc(id).collection(subCollectionName).add(this.addCreated(document))      
  }; 
  public addCreated(data){
    return {
      ...data, createdAt: firebase.default.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.default.firestore.FieldValue.serverTimestamp(),
      };
        }

public updateCreated(data){
  return {
    ...data,updatedAt:firebase.default.firestore.FieldValue.serverTimestamp(),

  };
  
}
public async create<T extends BaseDatabaseModels>(collection:string, data:T): Promise<firebase.default.firestore.DocumentSnapshot<firebase.default.firestore.DocumentData>> {
 const doc = await this.store.collection<T>(collection).add(this.addCreated(data));
return doc.get();

}
snapshotToDataConverter(query: Promise<firebase.default.firestore.DocumentSnapshot<firebase.default.firestore.DocumentData>>) {
  return new Observable((observer) => {
    query
      .then(ref => {
        const obj = ref.data();
        obj.id = ref.id;
        observer.next(obj);
      }).catch(err => {
        observer.error(err);
      });
  });
}
book(booking): Observable<any> {
  return this.snapshotToDataConverter(this.create('booking',booking ));
}
public getOne<T extends BaseDatabaseModels>(collection: string, id: string): Observable<T> {
  return this.store.doc<T>(`${collection}/${id}`).valueChanges().pipe(take(1));
}
public findAll<T extends BaseDatabaseModels>(collection: string): Observable<T[]> {
  return this.store.collection<T>(collection).valueChanges({ idField: 'id' }).pipe(take(1));
}

public uploadFile(folderName: string, downloadUrl: string, fileName: string): Promise<any> {
  return this.store.collection<{ downloadUrl: string; fileName: string; uid: string; }>(`fileReferences`).add({ downloadUrl, fileName, uid: this.userid });
};
snapshotchanges(query: Promise<firebase.default.firestore.DocumentSnapshot<firebase.default.firestore.DocumentData>>) {
  return new Observable((observer) => {
    query
      .then(ref => {
        const obj = ref.data();
        obj.id = ref.id;
        observer.next(obj);
      }).catch(err => {
        observer.error(err);
      });
  });
}
upload(productdetail): Observable<any> {
  return this.snapshotchanges(this.create('productdetail',productdetail ));
}
public get<T extends BaseDatabaseModels>(collection: string, id: string): Observable<T> {
  return this.store.doc<T>(`${collection}/${id}`).valueChanges().pipe(take(1));
}
public find<T extends BaseDatabaseModels>(collection: string): Observable<T[]> {
  return this.store.collection<T>(collection).valueChanges({ idField: 'id' }).pipe(take(1));
};
}