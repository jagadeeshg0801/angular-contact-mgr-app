import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  nodes:any;
  selectedNode:any;
  selectedString: string;
  constructor(private mockService: MockService) { }

  ngOnInit(): void {
    this.getNodes();
  }

  getNodes(){
    this.mockService.getNodeList().subscribe((res)=>{
      console.log("data", res);
      this.nodes = res.data;
    })
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

}
