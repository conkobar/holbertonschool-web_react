/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow();

const updatedRow: RowElement = CRUD.updateRow(row, 23);

CRUD.updatedRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
