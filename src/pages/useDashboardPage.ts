import { useEffect, useState } from 'react';
import { CrudService } from '../services/CrudService.ts';
import firebase from 'firebase/app';
import { IResListBlog } from '../model/response/IResListBlog.ts';

export function useDashboardPage() {
  const crudService = new CrudService();
  const [data, setData] = useState<IResListBlog[]>([]);

  function onChanges(e: firebase.database.DataSnapshot) {
    const dataParse: IResListBlog[] = [];
    e.forEach(function (v) {
      const value = v.val();
      const key = v.key;
      dataParse.push({ ...value, key: key });
    });
    setData(dataParse);
  }

  useEffect(() => {
    console.log(data);
  }, [data]);
  useEffect(() => {
    crudService.getAll().on('value', onChanges);
  }, []);

  return {
    data,
  };
}
