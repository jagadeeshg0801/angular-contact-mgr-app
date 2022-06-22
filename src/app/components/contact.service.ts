import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  documentData: TreeNode[];
  constructor() { }


  setDoucmentData(documentData:any){
    this.documentData = documentData;
  }

  getDocumentData(): TreeNode[]{
    return this.documentData;
  }
}
