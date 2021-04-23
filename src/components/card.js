import React from 'react'
import format from 'date-fns/format'
import Progress from './progressBar'
import { sentenceCase, getBillActions } from '../Util/helper'
import Status from './common/status'
import Sources from './common/billSource'

const Card = ({
  title,
  identifier,
  jurisdiction,
  actions,
  sources,
  createdAt,
}) => {
  const lastAction = getBillActions(actions)

  return (
    <>
      <div className="mb-4 mt-4 w-full flex justify-center  ">
        <div className="max-w-md  rounded-3xl border shadow-md mx-1 my-1   border-gray-200 p-4 flex flex-col justify-betwee leading-normal">
          <div className="mb-8">
            <div className="text-sm  flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={
                  'https://res.cloudinary.com/babyhulk/image/upload/w_40,h_40,f_auto/v1584505244/flags/Flag_of_' +
                  jurisdiction +
                  '.svg'
                }
                alt={'Flag of' + jurisdiction}
              />

              <div className=" text-center py-4 lg:px-4">
                <div
                  className="font-light px-2 mx-2 text-sm text-indigo-600 bg-indigo-100 rounded-full"
                  role="alert"
                >
                  <p className="font-semibold mr-2 text-left flex-auto">
                    {jurisdiction} - {identifier}
                  </p>
                </div>
                <div className="flex mt-3">
                  <Status actions={actions} />
                </div>
              </div>
            </div>

            <Progress
              actions={actions}
              createdAt={createdAt}
              jurisdiction={jurisdiction}
              identifier={identifier}
            />
          </div>
          <div className="flex items-center">
            <div className="text-sm border-t border-grey p-4 pin-b ">
              <div className="flex">
                <span className=" pl-1">
                  <svg
                    className="fill-current text-gray-500 w-5  h-5 mr-2 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M7.667 12H2v8H0V0h12l.333 2H20l-3 6 3 6H8l-.333-2z" />
                  </svg>
                </span>
                <span className=" line-clamp-1 md:line-clamp-3 text-gray-700 mb-3 leading-snug break-words  truncate-custom ">
                  {' '}
                  {sentenceCase(title)}
                </span>
              </div>

              <div className="flex">
                <span className="mb-3 p-1">
                  <svg
                    className="fill-current text-gray-500 w-5  h-5 mr-2 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16 2h4v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V0h16v2zm0 2v13a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4h-2zM2 2v15a1 1 0 0 0 1 1h11.17a2.98 2.98 0 0 1-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z" />
                  </svg>
                </span>
                <p className="text-gray-700  mr-2 mb-3 leading-snug">
                  Last activity posted on{' '}
                  <time>
                    {format(new Date(lastAction[0].date), 'LLL dd, yyyy')}
                  </time>{' '}
                  -{' '}
                  <span className="text-gray-700 mb-3  f6 db pv2 ">
                    {' '}
                    {sentenceCase(actions[0].description)}
                  </span>
                </p>
              </div>

              <div className="flex">
                <span>
                  <svg
                    className="fill-current text-gray-500 w-5  h-5 mr-2 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                  </svg>
                </span>

                <div>
                  <p className="text-gray-700 mb-2">{jurisdiction} Source(s)</p>

                  <Sources sources={sources} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
