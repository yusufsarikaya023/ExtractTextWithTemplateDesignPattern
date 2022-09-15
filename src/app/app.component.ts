import { Component, Injector, OnInit } from '@angular/core';
import { ExtractAsPdf } from './templatePattern/extrackAsPdf';
import { ExtractAsWord } from './templatePattern/extractAsWord';
import { ReplacingKeys } from './templatePattern/replacingKeys';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  primitiveTextForInput = 'Hello, Use {name} {surname} for replace';
  replacedTextForInput = '';
  constructor(private injector: Injector) {}
  ngOnInit(): void {}

  replaceText(): void {
    const maps = new Map<string, string>();
    maps.set(ReplacingKeys.NAME, 'Yusuf');
    maps.set(ReplacingKeys.SURNAME, 'Sarıkaya');
    maps.set(ReplacingKeys.EMAIL, 'yusufsarikaya023@gmail.com');
    const pdfExtract = new ExtractAsPdf();
    const worlExtract = new ExtractAsWord();
    pdfExtract.templateMethod(this.primitiveTextForInput, maps);
    worlExtract.templateMethod(this.primitiveTextForInput, maps);
    this.replacedTextForInput = pdfExtract.replacedText;
  }
}
