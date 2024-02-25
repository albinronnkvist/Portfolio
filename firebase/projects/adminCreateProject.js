import { useState, useEffect } from "react"
import { setDoc, doc, collection } from '@firebase/firestore'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage"
import { db } from "../initFirebase"
import LoadingButton from "../../components/other/loadingButton"

export default function AdminCreateProject() {
  const [loading, setLoading] = useState(false)
  const [imageLoading, setImageLoading] = useState("")

  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [text, setText] = useState("")
  const [titleEn, setTitleEn] = useState("")
  const [excerptEn, setExcerptEn] = useState("")
  const [textEn, setTextEn] = useState("")

  const [image, setImage] = useState(null)

  const [tag, setTag] = useState("")
  const [tags, setTags] = useState([])

  const [year, setYear] = useState(0)
  const [featured, setFeatured] = useState(false)

  const [repository, setRepository] = useState("")
  const [website, setWebsite] = useState("")
  const [report, setReport] = useState("")

  const clearState = () => {
    setTitle(""),
    setExcerpt(""),
    setText(""),
    setTitleEn(""),
    setExcerptEn(""),
    setTextEn(""),
    setImage(null),
    setTag(""),
    setTags([]),
    setYear(0),
    setFeatured(false),
    setRepository(""),
    setWebsite(""),
    setReport(""),
    setImageLoading("")
  }

  const clearForm = () => {
    document.getElementById("createProjectForm").reset()
  }

  const createProject = async (e) => {
    e.preventDefault()
    setLoading(true)

    const metadata = {
      contentType: 'image/jpeg'
    };
    
    const storage = getStorage()
    const imagePath = `projects/${image.name}`
    const storageRef = ref(storage, imagePath)
    const uploadTask = uploadBytesResumable(storageRef, image, metadata)

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        if(progress !== 100) {
          setImageLoading(`Uploading image...`)
        } else {
          setImageLoading(`Image was uploaded. Creating project...`)
        }
      }, 
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            alert("Unauthorized")
            break
          case 'storage/canceled':
            alert("Upload cancelled")
            break
          case 'storage/unknown':
            alert("Unknown error")
            break
        }
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          const object = { 
            title: title,
            excerpt: excerpt,
            text: text,
            titleEn: titleEn,
            excerptEn: excerptEn,
            textEn: textEn,
            imageUrl: downloadURL,
            imagePath: imagePath,
            tags: tags,
            year: year,
            featured: featured,
            repository: repository,
            website: website,
            report: report
          }
          
          try {
            await setDoc(doc(collection(db, "projects")), object);
            setLoading(false)
            alert("Project was created")
            clearState()
            clearForm()
          } catch(error) {
            setLoading(false)
            alert(error)
          }
        })
      }
    )
  }

  return (
    <>
      <form 
        id="createProjectForm"
        onSubmit={createProject} 
        className="rounded w-full p-4 dark:bg-gray-light bg-white shadow-xl flex flex-col gap-4"
      >
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
                <label>Title (Engelska)</label>
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
            <label>Image</label>
            <br/>
            <label className=" w-40 flex flex-col items-center py-4 px-6 bg-primary-dark dark:bg-primary-default text-white dark:text-black-dark rounded cursor-pointer hover:opacity-75 transition-opacity duration-200">
              <i class="bi bi-file-arrow-up"></i>
              <span className="mt-2 text-base leading-normal">Välj fil</span>
              <input 
                type="file" 
                accept="image/*"
                onChange={(event) => {
                  setImage(event.target.files[0])
                }} 
                className="hidden"
                required
              />
            </label>
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

          <div>
            <label>Year</label>
            <br/>
            <input 
              type="number" 
              onChange={(event) => {
                setYear(event.target.value)
              }} 
              className="formInput w-1/3" 
              required
            />
          </div>

          <div>
            <label>Featured</label>
            <br/>
            <input 
              type="checkbox" 
              onChange={(event) => {
                setFeatured(!featured)
              }}  
              className="checked:bg-primary-default checked:border-transparent"
            />
          </div>

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
          <p>{imageLoading}</p>
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