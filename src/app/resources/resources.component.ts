import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Resource } from 'src/model/Resource';
import { ResourceService } from 'src/service/ResourceService';


@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {

  resources: Resource[] = [];
  loaded: boolean = false;
  linkUrl: string = '/assets/docs/Talleres Examen Admisión-.pdf'; // Replace with your desired URL

  download: boolean = false;

  constructor(private resourceService: ResourceService, private sanitizer: DomSanitizer,private router: Router) {
  }

  ngOnInit(): void {
    this.resourceService.getResources().subscribe(
      (resources: Resource[]) => {
        this.resources = resources;
        
        resources.forEach(element => {
          const lastIndex = (element.document+"").lastIndexOf('.');
          const extension = (element.document+"").substring(lastIndex + 1);
          switch(extension){
            case 'pdf':{
              element.image="/assets/img/resources/pdf.png";
              break;
            }
            case 'doc' || 'docx':{
              element.image="/assets/img/resources/word.png";
              break;
            }
            case 'doc': case 'docx':{
              element.image="/assets/img/resources/word.png";
              break;
            }
            case 'xlsx': case 'xlsm': case 'xlsb': case 'xltx':{
              element.image="/assets/img/resources/excel.png";
              break;
            }
            case 'pptx': case 'pptm': case 'ppt':{
              element.image="/assets/img/resources/powerpoint.png";
              break;
            }
            default: {
              element.image="/assets/img/resources/default.png";
              break;
            }
          }
        });
        this.loaded = true;
      },
      (error) => {
        console.error('Failed to load resource:', error);
      }
    );
    
  }

  downloadDocument(resource: Resource): void {
    var link: string = resource.document+"";
    window.open(link,"_blank");
  }

  

  

}
