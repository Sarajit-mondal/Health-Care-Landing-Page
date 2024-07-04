import React from 'react'

function Question() {
  return (
    <div>
       <button className='px-3 py-1 border-2 rounded-2xl'>Faq</button>
       <h2>Frequently Asked Question</h2>

       {/* question */}
       <div className="collapse [&>div]:bg-secondary-color [&>div]:my-1">
  <input type="radio" name="my-accordion-1" defaultChecked />
  <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse bg-secondary-color my-1">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse bg-secondary-color my-1">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
    </div>
  )
}

export default Question
