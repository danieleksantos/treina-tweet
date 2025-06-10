import TextInput from "../components/TextInput";
import Tweet from '../components/Tweet';
import styles from './Index.module.css'
import { useIndex } from "../hooks/useIndex.page";

export default function Index() {
    const {
        text,
        onTextChange,
        maxLength,
        sendTweet,
        tweetList
    } = useIndex();
    
    return (
        <div>
            <h1 className={styles.title}>Treina-Tweet</h1>
            <div className={styles.inputContainer}>
                <img 
                className={styles.inputAvatar}
                src={'https://github.com/danieleksantos.png'}
                alt="foto perfil" 
                />
                <TextInput 
                    placeholder={'O que está acontecendo?'}
                    maxLength={maxLength}
                    value={text}
                    onChange={onTextChange}
                />
            </div>
            <div className={styles.buttonContainer}>
                <div>{text.length}/{maxLength}</div>
                    <button 
                    className={styles.postButton} 
                    onClick={sendTweet}
                    disabled={text.length === 0}
                    >
                        Tweetar
                    </button>            
                </div>
            <ul className={styles.tweetList}>
                {tweetList.map(tweet => {
                    return (
                        <li className={styles.tweetListItem}>
                            <Tweet tweet={tweet}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}