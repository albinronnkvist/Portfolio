import { motion } from "framer-motion";

export default function LoadingInitial() {
  return (
    <div className="flex flex-col justify-center h-screen dark:bg-black-dark bg-black-dark text-black-dark dark:text-white">
      <div className="w-screen flex justify-center items-center">
      <motion.div
          animate="visible"
          initial="hidden"
          variants={{
            hidden: {
              y: -100,
              scale: 0,
              opacity: 0
            },
            visible: {
              y: 0,
              scale: 1.5,
              opacity: 1,
              transition: {
                type: 'spring',
                duration: 1,
                bounce: .3
              }
            }
          }}
        >
          <svg width="50" height="50" version="1.1" viewBox="0 0 154 100" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" className="animate-scale2">
            <g transform="translate(-279.82 -197.25)" fill="#34D399">
              <g>
                <path className="st0" d="m460.8 238.7v-3.1l2.1-0.3 9.6-25.6h4.9l9.5 25.6 2.1 0.3v3.1h-9.2v-3.1l2.1-0.4-1.5-4.6h-10.8l-1.6 4.6 2.1 0.4v3.1zm10-11.9h8.2l-3.8-10.7-0.3-0.8h-0.1l-0.3 0.8z"/>
                <path className="st0" d="m493.2 238.7v-3.1l3.2-0.6v-21.6l-3.2-0.6v-3.1h11.6v3.1l-3.4 0.6v21.5h9.1l0.3-4.4h3.8v8.2z"/>
                <path className="st0" d="m519 238.7v-3.1l3.2-0.6v-21.6l-3.2-0.6v-3.1h12.8c3.3 0 5.8 0.7 7.6 2s2.7 3.3 2.7 5.9c0 1.3-0.4 2.5-1.1 3.5-0.8 1-1.8 1.8-3.1 2.3 1.2 0.3 2.1 0.7 2.9 1.4s1.4 1.5 1.8 2.4 0.6 2 0.6 3.1c0 2.7-0.9 4.8-2.7 6.2s-4.3 2.1-7.5 2.1h-14zm8.1-16.8h5.1c1.5 0 2.7-0.4 3.5-1.1s1.3-1.7 1.3-3c0-1.4-0.5-2.5-1.4-3.2s-2.2-1-4-1h-4.5zm0 12.9h5.9c1.6 0 2.9-0.4 3.8-1.1 0.9-0.8 1.3-1.9 1.3-3.3 0-1-0.2-1.9-0.5-2.6s-0.8-1.3-1.5-1.7-1.5-0.6-2.6-0.6h-6.4z"/>
                <path className="st0" d="m547.4 238.7v-3.1l3.2-0.6v-21.6l-3.2-0.6v-3.1h11.3v3.1l-3.1 0.6v21.6l3.1 0.6v3.1z"/>
                <path className="st0" d="m563.2 238.7v-3.1l3.2-0.6v-21.6l-3.2-0.6v-3.1h8.3l13.3 21.2h0.1v-17.4l-3.7-0.6v-3.1h11.4v3.1l-3.2 0.6v25.3h-4.8l-13.6-21.2h-0.1v17.4l3.7 0.6v3.1z"/>
                <path className="st0" d="m461.1 286v-3.1l3.2-0.6v-21.6l-3.2-0.6v-3.1h13.4c2.2 0 4 0.3 5.6 1 1.5 0.7 2.7 1.6 3.5 2.9 0.8 1.2 1.2 2.8 1.2 4.5s-0.4 3.2-1.2 4.4c-0.8 1.3-1.9 2.2-3.4 2.9-1.4 0.7-3.1 1.1-5.1 1.1l-5.9 0.1v8.4l3.2 0.6v3.1zm8.1-16h5c1.9 0 3.3-0.4 4.2-1.1 0.9-0.8 1.4-1.9 1.4-3.3s-0.4-2.6-1.3-3.4-2.2-1.3-4-1.3h-5.2v9.1zm10.7 16-5.5-13.3 4.7-0.8 4.7 10.5 2.3 0.5v3.1z"/>
                <path className="st0" d="m503.4 286.4c-1.9 0-3.7-0.4-5.2-1.1-1.6-0.7-2.9-1.7-4-3.1-1.1-1.3-2-2.9-2.6-4.7s-0.9-3.8-0.9-5.9v-0.4c0-2.1 0.3-4.1 0.9-5.9s1.4-3.3 2.6-4.7c1.1-1.3 2.4-2.3 4-3.1 1.6-0.7 3.3-1.1 5.2-1.1 2 0 3.7 0.4 5.3 1.1s2.9 1.7 4 3.1c1.1 1.3 1.9 2.9 2.5 4.7s0.9 3.7 0.9 5.9v0.4c0 2.1-0.3 4.1-0.9 5.9s-1.4 3.3-2.5 4.7c-1.1 1.3-2.4 2.3-4 3.1-1.6 0.7-3.3 1.1-5.3 1.1zm0-4c1.8 0 3.2-0.4 4.3-1.3s2-2.1 2.5-3.8c0.6-1.6 0.8-3.5 0.8-5.6v-0.5c0-2.1-0.3-4-0.8-5.6-0.6-1.6-1.4-2.8-2.5-3.7s-2.6-1.4-4.3-1.4-3.1 0.5-4.2 1.4-2 2.1-2.5 3.7c-0.6 1.6-0.9 3.4-0.9 5.6v0.5c0 2.1 0.3 4 0.9 5.6s1.4 2.9 2.6 3.8c1 0.9 2.4 1.3 4.1 1.3zm-6.8-28.5v-4.6h5v4.6zm8.7 0v-4.6h5v4.6z"/>
                <path className="st0" d="m520.6 286v-3.1l3.2-0.6v-21.6l-3.2-0.6v-3.1h8.3l13.3 21.2h0.1v-17.4l-3.7-0.6v-3.2h11.4v3.1l-3.2 0.6v25.3h-4.8l-13.6-21.1h-0.1v17.4l3.7 0.6v3.1z"/>
                <path className="st0" d="m554.2 286v-3.1l3.2-0.6v-21.6l-3.2-0.6v-3.1h8.3l13.3 21.2h0.1v-17.4l-3.7-0.6v-3.2h11.4v3.1l-3.2 0.6v25.3h-4.8l-13.6-21.1h-0.1v17.4l3.7 0.6v3.1z"/>
                <path className="st0" d="m587.9 286v-3.1l3.2-0.6v-21.6l-3.2-0.6v-3.1h11.2v3.1l-3.1 0.6v21.6l3.1 0.6v3.1zm7.3-7.7-2.6-3 14-14.9 0.1-0.1-2.6-0.3v-3h10.8v3.1l-2.7 0.5zm9.5 7.7v-3.1l2.6-0.3-7.6-10.5 3.1-3.5 10.4 13.9 2.8 0.5v3.1h-11.3z"/>
                <path className="st0" d="m631.2 286-9.5-25.6-2.5-0.3v-3.1h10.5v3.1l-2.6 0.4 6 17.7 0.5 1.9h0.1l0.6-1.9 6.1-17.7-3-0.4v-3.1h10.2v3.1l-2.5 0.3-9.1 25.6z"/>
                <path className="st0" d="m651.8 286v-3.1l3.2-0.6v-21.6l-3.2-0.6v-3.1h11.3v3.1l-3.1 0.6v21.6l3.1 0.6v3.1z"/>
                <path className="st0" d="m678.8 286.4c-2 0-3.8-0.2-5.5-0.7s-3.4-1.3-5-2.4v-6.7h3.9l0.6 4.3c0.7 0.5 1.6 0.9 2.6 1.2s2.1 0.5 3.4 0.5c1.2 0 2.2-0.2 3-0.5s1.4-0.8 1.8-1.4 0.6-1.3 0.6-2.2c0-0.8-0.2-1.5-0.6-2.1s-1-1.1-1.9-1.6-2-0.9-3.5-1.3c-2.2-0.6-4-1.3-5.4-2.1-1.5-0.8-2.5-1.8-3.3-2.9-0.7-1.1-1.1-2.4-1.1-3.9 0-1.6 0.4-2.9 1.3-4.1 0.8-1.2 2-2.1 3.5-2.8s3.2-1 5.2-1.1c2.1 0 4.1 0.3 5.7 0.8 1.7 0.6 3 1.3 4.2 2.3v6.2h-3.8l-0.7-4.1c-0.5-0.4-1.3-0.7-2.1-1-0.9-0.3-1.9-0.4-3.1-0.4-1 0-1.9 0.2-2.7 0.5s-1.4 0.8-1.8 1.4-0.7 1.3-0.7 2.2c0 0.7 0.2 1.4 0.6 1.9s1 1 1.9 1.5c0.9 0.4 2.1 0.9 3.7 1.3 3.1 0.8 5.5 2 7.1 3.5s2.4 3.4 2.4 5.6c0 1.6-0.4 3-1.3 4.2s-2.1 2.1-3.7 2.8c-1.3 0.8-3.2 1.1-5.3 1.1z"/>
                <path className="st0" d="m700.8 286v-3.1l3.2-0.6v-21.5h-5.8l-0.4 3.7h-3.8v-7.5h25v7.5h-3.8l-0.4-3.7h-5.8v21.5l3.2 0.6v3.1z"/>
              </g>
                <path className="st1" d="m351.4 254h-2.7v-11.8h3.3c4.1 0 7.4-3.3 7.4-7.4v-22c0-7 5.7-12.7 12.7-12.7h12.1v11.8h-12.2c-0.5 0-0.9 0.4-0.9 0.9v21.4c0.1 10.9-8.8 19.8-19.7 19.8z"/>
                <path className="st1" d="m384.1 296.1h-12.1c-7 0-12.7-5.7-12.7-12.7v-22c0-4.1-3.3-7.4-7.4-7.4h-3.3v-11.8h2.7c10.9 0 19.8 8.9 19.8 19.8v21.4c0 0.5 0.4 0.9 0.9 0.9h12.1z"/>
                <path className="st1" d="m400.8 262.6h-13.5v-11.8h13.5c10.7 0 19.4-8.7 19.4-19.4s-8.7-19.4-19.4-19.4h-28.3v-12h28.3c17.2 0 31.3 14 31.3 31.3s-14 31.3-31.3 31.3z"/>
                <polygon className="st1" points="417.5 296.1 389.5 258.7 399 251.6 432.3 296.1"/>
                <polygon className="st1" points="295.5 296.1 281 296.1 348.4 200 374 200 374 211.8 354.5 211.8"/>    
            </g>
          </svg>
        </motion.div>
      </div>
    </div>
  )
}