import * as React from 'react'
import './Pdf.css'
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  Inject,
} from '@syncfusion/ej2-react-pdfviewer'

class PDFViewer extends React.Component {
  render() {
    return (
      <div
        style={{
          maxHeight: '100vh',
          padding: '1rem 0',
        }}
      >
        <PdfViewerComponent
          toolbarSettings={{
            showTooltip: true,
            toolbarItems: [
              'OpenOption',
              'PageNavigationTool',
              'MagnificationTool',
              'PanTool',
              'SelectionTool',
              'SearchOption',
              'PrintOption',
              'DownloadOption',
              'UndoRedoTool',
              'AnnotationEditTool',
              'FormDesignerEditTool',
              'CommentTool',
              'SubmitForm',
            ],
          }}
          id="container"
          documentPath="PDF_Succinctly.pdf"
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
          style={{ height: '790px' }}
        >
          <Inject
            services={[
              Toolbar,
              Magnification,
              Navigation,
              LinkAnnotation,
              BookmarkView,
              ThumbnailView,
              Print,
              TextSelection,
              TextSearch,
              Annotation,
              FormFields,
              FormDesigner,
            ]}
          />
        </PdfViewerComponent>
      </div>
    )
  }
}
export default PDFViewer
