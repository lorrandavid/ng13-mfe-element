import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  scriptURL = '';
  elementName = '';

  constructor(private route: ActivatedRoute) { }

  async ngOnInit() {
    const data = this.route.snapshot.data;
    this.scriptURL = data['scriptURL'];
    this.elementName = data['elementName'];

    if (this.scriptURL && this.elementName) {
      await this.loadScript(this.scriptURL);
      this.createElement(this.elementName);
    }
  }

  private loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const scriptId = `script-${src}`;
      if (document.getElementById(scriptId)) {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = src;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Script load error for ${src}`));
      document.head.appendChild(script);
    });
  }

  private createElement(elementName: string) {
    const element = document.createElement(elementName);
    const wrapper = document.getElementById('wrapper');
    wrapper?.appendChild(element);
  }
}
