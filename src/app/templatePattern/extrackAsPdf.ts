import { jsPDF } from 'jspdf';
import { ReplaceTemplate } from './replaceTemplate';
export class ExtractAsPdf extends ReplaceTemplate {
  constructor() {
    super();
  }

  protected extractAsFile(text: string) {
    const doc = new jsPDF();
    doc.addFont('assets/Roboto-Regular.ttf', 'Roboto', 'normal');
    doc.html(text, {
      x: 10,
      y: 10,
      width: 1000,
      callback: (doc) => {
        doc.save('a4.pdf');
      },
    });
  }
}
