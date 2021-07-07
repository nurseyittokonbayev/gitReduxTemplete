import React from 'react'
import Markdown from 'markdown-to-jsx'
import { useSelector } from 'react-redux'

const Readme = () => {
  const readme = useSelector((s) => s.data.readme)
  return (
    <div>
      <Markdown>{readme}</Markdown>
    </div>
  )
}

export default Readme
