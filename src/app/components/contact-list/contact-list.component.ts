import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MockService } from 'src/app/services/mock.service';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  nodes:any[] = [
    {
        "label": "Documents",
        "data": "Documents Folder",
        "expandedIcon": "pi pi-folder-open",
        "collapsedIcon": "pi pi-folder",
        "children": [
            {
                "label": "Work",
                "data": "Work Folder",
                "expandedIcon": "pi pi-folder-open",
                "collapsedIcon": "pi pi-folder",
                "children": [
                    {
                        "label": "Expenses.doc",
                        "icon": "pi pi-file",
                        "data": "Expenses Document",
                        "partialSelected": false
                    },
                    {
                        "label": "Resume.doc",
                        "icon": "pi pi-file",
                        "data": "Resume Document",
                        "partialSelected": false
                    }
                ],
                "partialSelected": false
            },
            {
                "label": "Home",
                "data": "Home Folder",
                "expandedIcon": "pi pi-folder-open",
                "collapsedIcon": "pi pi-folder",
                "children": [
                    {
                        "label": "Invoices.txt",
                        "icon": "pi pi-file",
                        "data": "Invoices for this month",
                        "partialSelected": false
                    }
                ],
                "partialSelected": false
            }
        ],
        "partialSelected": false
    },
    {
        "label": "Pictures",
        "data": "Pictures Folder",
        "expandedIcon": "pi pi-folder-open",
        "collapsedIcon": "pi pi-folder",
        "children": [
            {
                "label": "barcelona.jpg",
                "icon": "pi pi-image",
                "data": "Barcelona Photo"
            },
            {
                "label": "logo.jpg",
                "icon": "pi pi-file",
                "data": "PrimeFaces Logo"
            },
            {
                "label": "primeui.png",
                "icon": "pi pi-image",
                "data": "PrimeUI Logo"
            }
        ]
    },
    {
        "label": "Movies",
        "data": "Movies Folder",
        "expandedIcon": "pi pi-folder-open",
        "collapsedIcon": "pi pi-folder",
        "children": [
            {
                "label": "Al Pacino",
                "data": "Pacino Movies",
                "children": [
                    {
                        "label": "Scarface",
                        "icon": "pi pi-video",
                        "data": "Scarface Movie"
                    },
                    {
                        "label": "Serpico",
                        "icon": "pi pi-file-video",
                        "data": "Serpico Movie"
                    }
                ]
            },
            {
                "label": "Robert De Niro",
                "data": "De Niro Movies",
                "children": [
                    {
                        "label": "Goodfellas",
                        "icon": "pi pi-video",
                        "data": "Goodfellas Movie"
                    },
                    {
                        "label": "Untouchables",
                        "icon": "pi pi-video",
                        "data": "Untouchables Movie"
                    }
                ]
            }
        ]
    }
];
  selectedNode:any;
  selectedString: string;
  displayNodeSize: number = 3;
  display: boolean;
  
  public documentForm: FormGroup = new FormGroup({
    document: new FormControl([])
  })
  constructor(private mockService: MockService, private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.getNodes();
  }

  getNodes(){
    // this.mockService.getNodeList().subscribe((res)=>{
    //   console.log("data", res);
    //   this.nodes = res.data;
    // })
  }

  nodeSelect(event:any) {
    this.updateSelectedString();
  }

  nodeUnselect(event:any) {
    this.updateSelectedString();
  }

  private updateSelectedString() {
    console.log('this.selectedNode',this.selectedNode);
    
    console.log('Object.keys(this.selectedNode)', Object.keys(this.selectedNode))

    this.selectedString = Object.keys(this.selectedNode)
      .map((key) => this.selectedNode[key].label)
      .join(',');
  }

  removeNode(node:any, index:number){
    console.log("node", node, index);
    this.selectedNode = this.selectedNode.filter((node: any, i:number)=>{
      return i != index ? node: null;
    })
  }

  toggleButton(event:any){
    console.log("event", event)
    this.display = !this.display;
    if(this.display){
      const data:any =this.contactService.getDocumentData() || [];
      if(data && data['document'].length>0){
        this.documentForm.patchValue({'document': data.document})
      }else{
        this.documentForm.reset();
      }
    }
    console.log('form value', this.documentForm.value);
  }
  
  submitForm(){
    this.documentForm.getRawValue();
    this.display = !this.display;
    this.contactService.setDoucmentData(this.documentForm.getRawValue());
    this.router.navigate(['/'])
  }

}
