export const tools = [
  {
    name: "JPG to PDF",
    route: "/jpg-to-pdf",
    icon: "🖼️",
    description: "Convert JPG images into a single PDF file.",
    longDescription:
      "Quickly merge multiple JPG images into one high-quality PDF. Ideal for creating printable documents or combining scans — supports ordering and basic compression.",
    category: "Image",
  },
  {
    name: "PDF Splitter",
    route: "/pdf-splitter",
    icon: "✂️",
    description: "Split PDF into individual pages.",
    longDescription:
      "Split multi-page PDF files into separate documents. Choose specific pages or extract ranges to get only the pages you need quickly and reliably.",
    category: "PDF",
  },
  {
    name: "Merge PDF",
    route: "/pdf-merge",
    icon: "🔗",
    description: "Combine multiple PDFs into one.",
    longDescription:
      "Combine several PDF files into a single, organized document. Maintain original quality, reorder files before merging, and download instantly — no account required.",
    category: "PDF",
  },
  {
    name: "Compress PDF",
    route: "/pdf-compress",
    icon: "📉",
    description: "Reduce PDF file size.",
    longDescription:
      "Reduce large PDF file sizes for faster sharing and emailing. Choose compression levels to balance quality and size while preserving text readability.",
    category: "PDF",
  },
  {
    name: "PDF to JPG",
    route: "/pdf-to-jpg",
    icon: "🖨️",
    description: "Convert PDF pages into JPG images.",
    longDescription:
      "Extract pages from PDFs as high-quality JPG images. Useful for snapshots, sharing individual pages, or preparing images for presentations and web use.",
    category: "PDF",
  },
  {
    name: "PDF to Word",
    route: "/pdf-to-word",
    icon: "📄➡️📝",
    description: "Convert PDF documents to Word format.",
    longDescription:
      "Convert PDFs to editable Word documents (.docx) while preserving layout and formatting as much as possible — ideal for content editing and collaboration.",
    category: "Document",
  },
  {
    name: "Word to PDF",
    route: "/word-to-pdf",
    icon: "📝➡️📄",
    description: "Convert Word documents to PDF.",
    longDescription:
      "Turn Word files into universally viewable PDFs quickly. Preserve fonts and layout so documents display consistently across devices and platforms.",
    category: "Document",
  },
  {
    name: "Image Converter",
    route: "/image-converter",
    icon: "🔄🖼️",
    description: "Convert images between formats (JPG, PNG, etc).",
    longDescription:
      "Convert images between popular formats with options for quality and transparency. Great for preparing assets for web, print, or sharing.",
    category: "Image",
  },
  {
    name: "Image Resizer",
    route: "/image-resizer",
    icon: "📐",
    description: "Resize images to custom dimensions.",
    longDescription:
      "Resize images to exact pixel dimensions or scale proportionally. Useful for thumbnails, social posts, or optimizing images for web pages.",
    category: "Image",
  },
  {
    name: "Word Counter",
    route: "/word-counter",
    icon: "🔢",
    description: "Count words and characters in your text.",
    longDescription:
      "Accurately count words, characters, and lines. Useful for writers, students, and SEO checks — supports paste and file input.",
    category: "Utilities",
  },
  {
    name: "Case Converter",
    route: "/case-converter",
    icon: "🔠",
    description: "Convert text to UPPERCASE, lowercase, or Capitalized.",
    longDescription:
      "Quickly change text case for formatting, code snippets, or content clean-up. Supports sentence case, title case, and custom rules.",
    category: "Utilities",
  },
  {
    name: "AI Summarizer",
    route: "/ai-summarizer",
    icon: "🧠",
    description: "Summarize long text using AI.",
    longDescription:
      "Generate concise summaries of long articles, reports or notes using on-device AI. Save time by extracting key points and action items.",
    category: "Utilities",
  },
  {
    name: "PDF Watermark",
    route: "/pdf-watermark",
    icon: "💧",
    description: "Add watermark text to your PDF.",
    longDescription:
      "Add visible watermarks or footers to PDFs to protect ownership or mark drafts. Customize position, opacity and text.",
    category: "PDF",
  },
  {
    name: "PDF Signer",
    route: "/pdf-signer",
    icon: "✍️",
    description: "Digitally sign your PDF files.",
    longDescription:
      "Add electronic signatures to PDF documents for approvals and contracts. Support for drawing or uploading signature images.",
    category: "PDF",
  },
  {
    name: "PDF Unlock",
    route: "/pdf-unlock",
    icon: "🔓",
    description: "Remove password from protected PDFs.",
    longDescription:
      "Remove user-level restrictions from PDFs when you have the right to do so. Recover access to printable or editable content quickly.",
    category: "PDF",
  },
  {
    name: "PDF Protect",
    route: "/pdf-protect",
    icon: "🔐",
    description: "Add password protection to your PDF.",
    longDescription:
      "Secure your PDF files with password protection and permission controls to prevent unauthorized printing or editing.",
    category: "PDF",
  },
  {
    name: "Rotate PDF",
    route: "/pdf-rotate",
    icon: "🔄",
    description: "Rotate pages in your PDF file.",
    longDescription:
      "Rotate single or multiple pages within a PDF to correct orientation issues. Apply rotation to selected ranges or entire documents.",
    category: "PDF",
  },
  {
    name: "Organize PDF",
    route: "/pdf-organize",
    icon: "📚",
    description: "Reorder or delete PDF pages.",
    longDescription:
      "Reorder, remove or extract pages from PDFs to create custom documents. Drag-and-drop ordering for a simple visual workflow.",
    category: "PDF",
  },
  {
    name: "Text to PDF",
    route: "/text-to-pdf",
    icon: "📝➡️📄",
    description: "Convert plain text into a PDF document.",
    longDescription:
      "Create printable PDFs from plain text input with options for fonts and page size. Useful for notes, receipts and simple documents.",
    category: "Document",
  },
  {
    name: "HTML to PDF",
    route: "/html-to-pdf",
    icon: "🌐➡️📄",
    description: "Convert HTML code into a PDF file.",
    longDescription:
      "Render HTML pages or snippets as PDFs while preserving styling. Great for exporting invoices, reports or blog posts to PDF format.",
    category: "Document",
  },
  {
    name: "PDF Reader",
    route: "/pdf-reader",
    icon: "📖",
    description: "Read and extract text from PDF files.",
    longDescription:
      "View PDFs in-browser and extract selectable text for editing or copying. Supports basic search and navigation features.",
    category: "PDF",
  },
  {
    name: "AI OCR",
    route: "/ai-ocr",
    icon: "🧾🔍",
    description: "Extract editable text from scanned images and PDFs using AI-powered OCR.",
    longDescription: `Our AI-powered Optical Character Recognition (OCR) technology transforms scanned documents, images, and PDFs into fully searchable and editable text with unprecedented accuracy. Unlike traditional OCR solutions, our advanced AI model understands context and handles complex layouts, making it perfect for both simple text extraction and sophisticated document processing needs.

    Key Features:
    - Multi-language support with automatic language detection
    - Maintains original document formatting and layout
    - Handles handwritten text with remarkable accuracy
    - Processes tables, columns, and complex layouts
    - Batch processing for multiple documents
    - Real-time preview and edit capabilities
    
    Perfect for businesses digitizing archives, researchers working with historical documents, or anyone needing to extract text from scanned materials. Our OCR tool preserves formatting while offering flexible export options including plain text, formatted documents, or searchable PDFs.
    
    Technical Specifications:
    - Supports over 100 languages
    - Processes multiple file formats (PDF, JPG, PNG, TIFF)
    - 99.9% accuracy for printed text
    - Smart layout preservation system
    - Automatic image enhancement
    
    Built with privacy in mind, all processing happens on secure servers with files automatically deleted after completion. Experience the future of document processing with our AI-enhanced OCR technology.`,
    blogContent: `ocr-advanced-guide.md`,
    category: "AI",
  },
  {
    name: "Chat with PDF",
    route: "/chat-with-pdf",
    icon: "💬📄",
    description: "Ask questions and get summaries from long PDF documents using AI.",
    longDescription: `Transform the way you interact with PDF documents using our revolutionary Chat with PDF feature. This AI-powered tool creates an interactive experience where you can ask questions, request summaries, and extract insights from any PDF document instantly. Powered by advanced language models, it understands context and provides accurate, relevant responses.

    Key Capabilities:
    - Natural language interaction with document content
    - Instant answers to specific questions
    - Smart summarization at document or section level
    - Citation of relevant page numbers and sections
    - Multiple document comparison
    - Context-aware responses
    
    Ideal for researchers analyzing papers, students studying textbooks, professionals reviewing contracts, or anyone needing to quickly extract information from lengthy documents. The AI understands document structure and maintains context across multiple questions.
    
    Advanced Features:
    - Handles technical and specialized content
    - Supports multiple languages
    - Processes large documents efficiently
    - Customizable response formats
    - Export conversation history
    
    Our secure processing ensures document privacy, with enterprise-grade encryption and automatic data cleanup. Experience a new way to work with PDFs through intelligent, conversational interaction.`,
    blogContent: `chat-pdf-guide.md`,
    category: "AI",
  },
  {
    name: "Batch Processing",
    route: "/batch-processing",
    icon: "🗂️",
    description: "Apply an action to multiple files at once (compress, convert, watermark).",
    longDescription:
      "Automate repetitive tasks by running batch operations on multiple files: convert formats, compress, watermark, and more in a single job.",
    category: "Productivity",
  },
  {
    name: "Conversion Suite",
    route: "/conversion-suite",
    icon: "🔁",
    description: "Comprehensive conversions: PDF ⇄ Word/Excel/PPT and more.",
    longDescription:
      "A complete conversion toolkit for professionals: export PDFs to Word, Excel, or PowerPoint and convert those formats back to PDF with layout preservation options.",
    category: "Productivity",
  },
  {
    name: "E-Signature",
    route: "/e-signature",
    icon: "✍️🔐",
    description: "Sign documents electronically and verify signatures.",
    longDescription:
      "Add legally-binding electronic signatures to documents, request signatures from others, and verify signed PDFs — streamlined for business workflows.",
    category: "Productivity",
  },
  {
    name: "Cloud Integration",
    route: "/cloud-integration",
    icon: "☁️",
    description: "Import and export files directly from Google Drive and Dropbox.",
    longDescription:
      "Connect your cloud storage to import files directly from Google Drive or Dropbox and export results back to your cloud accounts for a smooth workflow.",
    category: "UX",
  },
];
