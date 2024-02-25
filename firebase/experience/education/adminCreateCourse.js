import { useState } from "react"
import { setDoc, doc } from '@firebase/firestore'
import { db } from "../../initFirebase"
import LoadingButton from "../../../components/other/loadingButton"

export default function AdminCreateCourse() {
  const [loading, setLoading] = useState(false)

  const [id, setId] = useState("")
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [text, setText] = useState("")
  const [titleEn, setTitleEn] = useState("")
  const [excerptEn, setExcerptEn] = useState("")
  const [textEn, setTextEn] = useState("")
  const [courseplan, setCourseplan] = useState("")
  const [level, setLevel] = useState("A")
  const [points, setPoints] = useState(7.5)
  const [tag, setTag] = useState("")
  const [tags, setTags] = useState([])

  const [year, setYear] = useState(0)
  const [complete, setComplete] = useState(false)
  const [grade, setGrade] = useState("A")

  const [repository, setRepository] = useState("")
  const [website, setWebsite] = useState("")
  const [report, setReport] = useState("")

  const clearState = () => {
    setId(""),
    setTitle(""),
    setExcerpt(""),
    setText(""),
    setTitleEn(""),
    setExcerptEn(""),
    setTextEn(""),
    setCourseplan(""),
    setLevel("A"),
    setPoints(7.5),
    setTag(""),
    setTags([]),
    setYear(0),
    setComplete(false),
    setGrade("A"),
    setRepository(""),
    setWebsite(""),
    setReport("")
  }

  const clearForm = () => {
    document.getElementById("createCourseForm").reset();
  }

  const createCourse = async (e) => {
    e.preventDefault();
    setLoading(true)

    const object = { 
      id: id,
      title: title,
      excerpt: excerpt,
      text: text,
      titleEn: titleEn,
      excerptEn: excerptEn,
      textEn: textEn,
      courseplan: courseplan,
      level: level,
      points: points,
      tags: tags,
      year: year,
      complete: complete,
      grade: grade,
      repository: repository,
      website: website,
      report: report
    }
    
    try {
      await setDoc(doc(db, "courses", object.id), object);
      setLoading(false)
      alert("Course was created")
      clearState()
      clearForm()
    } catch(error) {
      setLoading(false)
      alert(error)
    }
  }

  return (
    <>
      <form 
        id="createCourseForm"
        onSubmit={createCourse} 
        className="rounded w-full p-4 dark:bg-gray-light bg-white shadow-xl flex flex-col gap-4"
      >
        <h4>About the course</h4>
          <div>
            <label>Course Id</label>
            <br/>
            <input 
              type="text" 
              name="id"
              onChange={(event) => {
                setId(event.target.value)
              }} 
              className="formInput w-1/4" 
              required 
            />
          </div>

          <div>
            <div className="flex flex-row gap-4 w-full">
              <div className="w-1/2">
                <label>Title</label>
                <br/>
                <input 
                  type="text" 
                  name="title"
                  onChange={(event) => {
                    setTitle(event.target.value)
                  }} 
                  className="formInput"
                  required
                />
              </div>
              <div className="w-1/2">
                <label>Title (English)</label>
                <br/>
                <input 
                  type="text" 
                  name="titleEn"
                  onChange={(event) => {
                    setTitleEn(event.target.value)
                  }} 
                  className="formInput"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-row gap-4 w-full">
              <div className="w-1/2">
                <label>Excerpt</label>
                <br/>
                <textarea 
                  name="excerpt"
                  onChange={(event) => {
                    setExcerpt(event.target.value)
                  }} 
                  className="formInput" 
                  required
                />
              </div>
              <div className="w-1/2">
                <label>Excerpt (Engelska)</label>
                <br/>
                <textarea 
                  name="excerptEn"
                  onChange={(event) => {
                    setExcerptEn(event.target.value)
                  }} 
                  className="formInput" 
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-row gap-4 w-full">
              <div className="w-1/2">
                <label>Text</label>
                <br/>
                <textarea 
                  name="text"
                  onChange={(event) => {
                    setText(event.target.value)
                  }} 
                  className="formInput" 
                  required
                />
              </div>

              <div className="w-1/2">
                <label>Text (Engelska)</label>
                <br/>
                <textarea 
                  name="textEn"
                  onChange={(event) => {
                    setTextEn(event.target.value)
                  }} 
                  className="formInput" 
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label>Courseplan</label>
            <br/>
            <input 
              type="text" 
              name="courseplan"
              onChange={(event) => {
                setCourseplan(event.target.value)
              }} 
              className="formInput" 
            />
          </div>

          <div>
            <label>Level</label>
            <br/>
            <select 
              name="level"
              onChange={(event) => {
                setLevel(event.target.value)
              }} 
              className="formInput w-auto" 
              required
            >
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
          </div>

          <div>
            <label>Points</label>
            <br/>
            <input 
              type="number" 
              step="0.1"
              min="0"
              onChange={(event) => {
                setPoints(event.target.value)
              }} 
              className="formInput w-1/3" 
            />
          </div>

          <div>
            <label>Tags</label>
            <br/>
            <div className="flex flex-row gap-4 w-full md:w-1/2">
              <input 
                type="text" 
                name="tag"
                onChange={(event) => {
                  setTag(event.target.value)
                }} 
                className="formInput w-full sm:w-2/3" 
              />
              <input 
                type="button" 
                onClick={() => {
                  setTags(tags => [...tags, tag])
                }} 
                className="formInputButton w-auto" 
                value="Add tag"
              />
            </div>
            <div>
              {tags.length > 0 && (
                tags.map((t, index) => (
                  <input type="button"
                    key={index}
                    className="formInputButton w-auto mt-2 mr-2" 
                    onClick={() => {setTags(tags => (tags.filter(tag => tag !== t)))}}
                    value={`${t} x`}
                  />
                ))
              )}
            </div>
          </div>



          <hr className="text-white mt-2 mb-6"/>
          <h4>Progress</h4>
          <div>
            <label>Year</label>
            <br/>
            <input 
              type="number" 
              onChange={(event) => {
                setYear(event.target.value)
              }} 
              className="formInput w-1/3" 
            />
          </div>

          <div>
            <label>Completed</label>
            <br/>
            <input 
              type="checkbox" 
              onChange={(event) => {
                setComplete(!complete)
              }}  
              className="checked:bg-primary-default checked:border-transparent"
            />
          </div>

          <div>
            <label>Grade</label>
            <br/>
            <select 
              onChange={(event) => {
                setGrade(event.target.value)
              }} 
              className="formInput w-auto"
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
          </div>



          <hr className="text-white mt-2 mb-6"/>
          <h4>Project</h4>

          <div>
            <label>Repository</label>
            <br/>
            <input 
              type="text" 
              onChange={(event) => {
                setRepository(event.target.value)
              }} 
              className="formInput"
            />
          </div>

          <div>
            <label>Website</label>
            <br/>
            <input 
              type="text" 
              onChange={(event) => {
                setWebsite(event.target.value)
              }} 
              className="formInput"
            />
          </div>

          <div>
            <label>Essay</label>
            <br/>
            <input 
              type="text" 
              onChange={(event) => {
                setReport(event.target.value)
              }} 
              className="formInput"
            />
          </div>

        <div className="w-full">
          <button disabled={loading} type="submit" className="submit">
            {!loading ? ( 
              <>Create</>
            ) : (
              <LoadingButton />
            )}
          </button>
        </div>
      </form>
    </>
  )
}