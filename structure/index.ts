import {StructureBuilder} from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Site Settings (singleton)
      S.listItem()
        .title('Site Settings')
        .icon(() => '⚙️')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('84525885-619a-49dd-8770-73c6a251f9a2')
            .title('Site Settings')
        ),

      S.divider(),

      // Hero Section (singleton)
      S.listItem()
        .title('Hero Section')
        .icon(() => '🎯')
        .child(
          S.document()
            .schemaType('hero')
            .documentId('fcdef636-5e6e-40d4-b5c8-86938cffa584')
            .title('Hero Section')
        ),

      // Purpose Section (singleton)
      S.listItem()
        .title('Purpose Section')
        .icon(() => '💡')
        .child(
          S.document()
            .schemaType('purpose')
            .documentId('287f1075-e16f-40f9-a785-00930fc1e6a7')
            .title('Purpose Section')
        ),

      // Case Studies (list)
      S.listItem()
        .title('Case Studies')
        .icon(() => '📖')
        .child(
          S.documentTypeList('caseStudy')
            .title('Case Studies')
            .defaultOrdering([{field: 'order', direction: 'asc'}])
        ),

      // History Section (singleton)
      S.listItem()
        .title('History Section')
        .icon(() => '📜')
        .child(
          S.document()
            .schemaType('description')
            .documentId('65c62a2f-5354-4479-b209-d2b22e27c1ce')
            .title('History Section')
        ),

      // Charts Section (singleton)
      S.listItem()
        .title('Charts Section')
        .icon(() => '📊')
        .child(
          S.document()
            .schemaType('chartsSection')
            .documentId('afebd2ee-7274-4a18-89ad-13fb3986c3ad')
            .title('Charts Section')
        ),
    ])
