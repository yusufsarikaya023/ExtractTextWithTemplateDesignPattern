import { ReplaceTemplate } from './replaceTemplate';
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, HeadingLevel } from 'docx';
export class ExtractAsWord extends ReplaceTemplate {
  constructor() {
    super();
  }

  protected extractAsFile(text: string) {
    const document = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: text,
              heading: HeadingLevel.TITLE,
            }),
          ],
        },
      ],
    });

    Packer.toBlob(document).then((blob) => {
      console.log(blob);
      saveAs(blob, 'example.docx');
      console.log('Document created successfully');
    });
  }
}
