// import React from 'react';

// import styles from './Home.module.scss';
// import classNames from 'classnames';
// import cardImage from '../../assets/img/desktop-card-img.png';
// import minCard from '../../assets/img/other-img.png';
// import articleImg from '../../assets/img/article-img.png';
// import attentionImg from '../../assets/img/attention-img.png';
// import arrowRight from '../../assets/icons/arrow-right.svg';

// export const Home = () => {
//   return (
//     <>
//       <div className={styles.desktopBooksWrapper}>
//         <div className={styles.bestSellers}>
//           <div className={classNames('mainContainer', styles.flexCardsWrapper)}>
//             <div className={styles.bestSellerCard}>
//               <div className={styles.imgBlock}>
//                 <img src={cardImage} alt='does not exist' />
//               </div>
//               <div className={styles.aboutBlock}>
//                 Արժեք ստեղծող և ճաշակ ձևավորող մարդկանց ոչ ձանձրալի մտքերն՝
//                 առաջին դեմքով
//               </div>
//             </div>
//             <div className={styles.bestSellerCard}>
//               <div className={styles.imgBlock}>
//                 <img src={cardImage} alt='does not exist' />
//               </div>
//               <div className={styles.aboutBlock}>
//                 Արժեք ստեղծող և ճաշակ ձևավորող մարդկանց ոչ ձանձրալի մտքերն՝
//                 առաջին դեմքով
//               </div>
//             </div>
//             <div className={styles.bestSellerCard}>
//               <div className={styles.imgBlock}>
//                 <img src={cardImage} alt='does not exist' />
//               </div>
//               <div className={styles.aboutBlock}>
//                 Արժեք ստեղծող և ճաշակ ձևավորող մարդկանց ոչ ձանձրալի մտքերն՝
//                 առաջին դեմքով
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className={styles.others}>
//           <div className='mainContainer'>
//             <div className={styles.otherWrapper}>
//               <div className={styles.otherCard}>
//                 <div className={styles.otherCardWrapper}>
//                   <div className={styles.otherImgBlock}>
//                     <img src={minCard} alt='other' />
//                   </div>
//                   <div className={styles.otherAboutBlock}>
//                     Բաքվի ջարդերի ու հայատյացության մասին՝ առաջին դեմքից և մի
//                     ընտանիքի օրինակով
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.otherCard}>
//                 <div className={styles.otherCardWrapper}>
//                   <div className={styles.otherImgBlock}>
//                     <img src={minCard} alt='other' />
//                   </div>
//                   <div className={styles.otherAboutBlock}>
//                     Բաքվի ջարդերի ու հայատյացության մասին՝ առաջին դեմքից և մի
//                     ընտանիքի օրինակով
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.otherCard}>
//                 <div className={styles.otherCardWrapper}>
//                   <div className={styles.otherImgBlock}>
//                     <img src={minCard} alt='other' />
//                   </div>
//                   <div className={styles.otherAboutBlock}>
//                     Բաքվի ջարդերի ու հայատյացության մասին՝ առաջին դեմքից և մի
//                     ընտանիքի օրինակով
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.otherCard}>
//                 <div className={styles.otherCardWrapper}>
//                   <div className={styles.otherImgBlock}>
//                     <img src={minCard} alt='other' />
//                   </div>
//                   <div className={styles.otherAboutBlock}>
//                     Բաքվի ջարդերի ու հայատյացության մասին՝ առաջին դեմքից և մի
//                     ընտանիքի օրինակով
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.otherCard}>
//                 <div className={styles.otherCardWrapper}>
//                   <div className={styles.otherImgBlock}>
//                     <img src={minCard} alt='other' />
//                   </div>
//                   <div className={styles.otherAboutBlock}>
//                     Բաքվի ջարդերի ու հայատյացության մասին՝ առաջին դեմքից և մի
//                     ընտանիքի օրինակով
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={styles.articleWrapper}>
//         <div className='mainContainer'>
//           <div className={styles.articleBlock}>
//             <div className={styles.title}>Հոդվածներ</div>
//             <div className={styles.allArticles}>
//               <div>
//                 <span className={styles.arrowTitle}>Բոլոր հոդվածները</span>
//                 <span className={styles.rightArrow}>
//                   <img src={arrowRight} alt='empty' />
//                 </span>
//               </div>
//             </div>
//             <div className={styles.articleCardsWrapper}>
//               <div className={styles.articleCardWrapper}>
//                 <div className={styles.articleCard}>
//                   <div className={styles.articleCardImg}>
//                     <img src={articleImg} alt='emty' />
//                   </div>
//                   <div className={styles.articalCardDesc}>
//                     Ով է 2022-ի ամենաէսթետիկ բեսթսելլերի՝ «Մաշկի խնամքի
//                     կանոնագիրք» գործի հեղինակը (տեսանյութ)
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.articleCardWrapper}>
//                 <div className={styles.articleCard}>
//                   <div className={styles.articleCardImg}>
//                     <img src={articleImg} alt='emty' />
//                   </div>
//                   <div className={styles.articalCardDesc}>
//                     Ով է 2022-ի ամենաէսթետիկ բեսթսելլերի՝ «Մաշկի խնամքի
//                     կանոնագիրք» գործի հեղինակը (տեսանյութ)
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.articleCardWrapper}>
//                 <div className={styles.articleCard}>
//                   <div className={styles.articleCardImg}>
//                     <img src={articleImg} alt='emty' />
//                   </div>
//                   <div className={styles.articalCardDesc}>
//                     Ով է 2022-ի ամենաէսթետիկ բեսթսելլերի՝ «Մաշկի խնամքի
//                     կանոնագիրք» գործի հեղինակը (տեսանյութ)
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.articleCardWrapper}>
//                 <div className={styles.articleCard}>
//                   <div className={styles.articleCardImg}>
//                     <img src={articleImg} alt='emty' />
//                   </div>
//                   <div className={styles.articalCardDesc}>
//                     Ով է 2022-ի ամենաէսթետիկ բեսթսելլերի՝ «Մաշկի խնամքի
//                     կանոնագիրք» գործի հեղինակը (տեսանյութ)
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.articleCardWrapper}>
//                 <div className={styles.articleCard}>
//                   <div className={styles.articleCardImg}>
//                     <img src={articleImg} alt='emty' />
//                   </div>
//                   <div className={styles.articalCardDesc}>
//                     Ով է 2022-ի ամենաէսթետիկ բեսթսելլերի՝ «Մաշկի խնամքի
//                     կանոնագիրք» գործի հեղինակը (տեսանյութ)
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className={styles.attentionNeedWrapper}>
//         <div className='mainContainer'>
//           <div className={styles.attentionBlock}>
//             <div className={styles.title}>Ուշադրության արժանի</div>
//             <div className={styles.allArticles}>
//               <div>
//                 <span className={styles.arrowTitle}>Բոլոր ապրանքները</span>
//                 <span className={styles.rightArrow}>
//                   <img src={arrowRight} alt='empty' />
//                 </span>
//               </div>
//             </div>
//             <div className={styles.attentionCardsWrapper}>
//               <div className={styles.attentionCard}>
//                 <div className={styles.attentionImg}>
//                   <img src={attentionImg} alt='' />
//                 </div>
//                 <div className={styles.info}>
//                   <h4>Նորմալ մարդիկ sadasdasdas</h4>
//                   <p>Սալի Ռունի</p>
//                   <span>5800 ֏</span>
//                 </div>
//                 <button>Դիտել</button>
//               </div>
//               <div className={styles.attentionCard}>
//                 <div className={styles.attentionImg}>
//                   <img src={attentionImg} alt='' />
//                 </div>
//                 <div className={styles.info}>
//                   <h4>Նորմալ մարդիկ</h4>
//                   <p>Սալի Ռունի</p>
//                   <span>5800 ֏</span>
//                 </div>
//                 <button>Դիտել</button>
//               </div>
//               <div className={styles.attentionCard}>
//                 <div className={styles.attentionImg}>
//                   <img src={attentionImg} alt='' />
//                 </div>
//                 <div className={styles.info}>
//                   <h4>Նորմալ մարդիկ</h4>
//                   <p>Սալի Ռունի</p>
//                   <span>5800 ֏</span>
//                 </div>
//                 <button>Դիտել</button>
//               </div>
//               <div className={styles.attentionCard}>
//                 <div className={styles.attentionImg}>
//                   <img src={attentionImg} alt='' />
//                 </div>
//                 <div className={styles.info}>
//                   <h4>Նորմալ մարդիկ</h4>
//                   <p>Սալի Ռունի</p>
//                   <span>5800 ֏</span>
//                 </div>
//                 <button>Դիտել</button>
//               </div>
//               <div className={styles.attentionCard}>
//                 <div className={styles.attentionImg}>
//                   <img src={attentionImg} alt='' />
//                 </div>
//                 <div className={styles.info}>
//                   <h4>Նորմալ մարդիկ</h4>
//                   <p>Սալի Ռունի</p>
//                   <span>5800 ֏</span>
//                 </div>
//                 <button>Դիտել</button>
//               </div>
//               <div className={styles.attentionCard}>
//                 <div className={styles.attentionImg}>
//                   <img src={attentionImg} alt='' />
//                 </div>
//                 <div className={styles.info}>
//                   <h4>Նորմալ մարդիկ</h4>
//                   <p>Սալի Ռունի</p>
//                   <span>5800 ֏</span>
//                 </div>
//                 <button>Դիտել</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
