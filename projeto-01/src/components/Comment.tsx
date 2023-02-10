import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface ContentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: ContentProps) {
  const [likeCount, setLikeCount] = useState<any>(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state: any) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/ItaloFL.png" />

      <div className={styles.commentWrapper}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Italo Ferreira</strong>
              <time
                title="14 de Janeiro ás 16:15h"
                dateTime="2023-01-14 16:15:50"
              >
                Cerca de 2h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
