import './search.scss'
import { categories, blogPosts } from './search.js'
const russianAlphabet = [
    "А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я" ];
  
const englishAlphabet = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
  
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export default function Search(){
    return(
        <>
        <section className='search'>
            <div className='main-container'>
                <div className='title'>
                    <div>
                        <img src="" alt="" />
                        <p>Главная</p>
                        <p>» Поиск по алфавиту</p>
                    </div>
                    <div>
                        <p>Поиск по алфавиту</p>
                        <a href="">Выбор товара по заболеванию</a>
                    </div>
                </div>
                <div className='alphabet'>
                {[russianAlphabet, englishAlphabet, numbers].map((group, index) => (
                    <div key={index} className="button-group">
                        {group.map((letter) => (
                        <button key={letter} className="alphabet-button">{letter}</button>
                            ))}
                    </div>
                ))}
                </div>
                <div className="categories-container">
                    {categories.map((category, index) => (
                    <div key={index} className="category">
                      <h3 className="category-title">
                      <span className="category-icon">{category.icon}</span>
                         {category.title}
                     </h3>
                <ul className="category-list">
                     {category.items.map((item, idx) => (
                     <li key={idx} className="category-item">
                         {item}
                     </li>
                 ))}
                 </ul>
             </div>
             ))}
            </div>
            <section className="blog-section">
      <div className="blog-header">
        <h2>Блог о здоровье</h2>
        <a href="/" className="latest-posts">
          ➤ Последние записи
        </a>
      </div>
      <div className="blog-container">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-description">{post.description}</p>
          </div>
        ))}
      </div>
    </section>
            </div>
        </section>
        </>
    )
}