import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content }) {
  return (
    <div className="prose max-w-2xl mx-6 md:mx-32 lg:mx-56 xl:mx-80 pb-20">
        <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}