import React from 'react'
import AskAQuestion from './AskAQuestion'
import Avatar from './Avatar'
import Link from 'components/Link'

export default function CommunityQuestions({ questions }) {
    return (
        <>
            {questions.length > 0 && (
                <div className="my-10">
                    <h3 className="mb-4">Community questions</h3>
                    <div className="w-full max-w-[405px] grid gap-5">
                        {questions.map((question, index) => {
                            const {
                                question_author,
                                question_avatar,
                                question_body,
                                answer_author,
                                answer_body,
                            } = question
                            return (
                                <div key={index} className="flex items-start space-x-4 w-full">
                                    <Avatar image={question_avatar} />
                                    <div className="flex-grow">
                                        <p className="mb-0">{question_body}</p>
                                        <p className="text-[14px] font-semibold opacity-50">by {question_author}</p>
                                        <div className="bg-gray-accent-light p-4 rounded-md w-full">
                                            <div className="flex space-x-2 items-center">
                                                <Avatar />
                                                <Link className="text-[14px] font-semibold">{answer_author}</Link>
                                            </div>
                                            <p className="my-3">{answer_body}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
            <AskAQuestion />
        </>
    )
}
