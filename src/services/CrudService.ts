import firebase from '../config/firebaseconfig.ts';
import { IReqCreateBlog } from '../model/request/IReqCreateBlog.ts';
const db = firebase.ref('/app');

export class CrudService {
  getAll() {
    return db;
  }

  create(tutorial: IReqCreateBlog) {
    return db.push(tutorial);
  }

  update(key: string, value: any) {
    return db.child(key).update(value);
  }

  delete(key: string) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}
