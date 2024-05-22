import React, { useState } from 'react'
import Header from '../../components/header/header'
import AddFAQ from "../../components/AddFAQ"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export default function Terms() {
  const [editorHtml, setEditorHtml] = useState('');

  const handleEditorChange = (value) => {
    setEditorHtml(value);
  };

  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],              
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
  ];

  const modules = {
    toolbar: {
      container: toolbarOptions
    }
  }
  return (
    <div>
      <Header header={"Manage Terms and Conditions"} />
      <div className="max-w-screen-2xl mx-auto lg:ml-64" style={{ marginTop: '-180px' }}>
        <div className="mx-4 sm:mx-9 mt-3">
            {/* <h4 className='text-3xl font-bold'>About Us</h4> */}
            <div className=' bg-white'>
              <ReactQuill
                theme="snow" 
                value={editorHtml}
                onChange={handleEditorChange}
                modules={modules}
                style={{ height: '300px' }}
              />
            </div>
        </div>
      </div>
    </div>
  )
}