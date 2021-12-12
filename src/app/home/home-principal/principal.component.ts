import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'SIGCA-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  statusReceived: boolean = true;
  UrlIframe: string = '';
  @ViewChild('marcoIframe') iframe: ElementRef | any;
  @ViewChild('sidebar') sidebar: ElementRef | any;

  constructor(private ren2: Renderer2) {}

  ngOnInit(): void {}

  recibirEstado(status: any) {
    this.statusReceived = status;
  }



  recibirLink(link:string):void{
    console.log(link)
    const direccion = this.iframe.nativeElement;
    this.ren2.setAttribute(direccion, 'src', link);
  }
}
