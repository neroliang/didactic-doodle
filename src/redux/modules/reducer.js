import { createAction } from 'redux-actions'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const increment = createAction(INCREMENT)
const decrement = createAction(DECREMENT)

const initialState = {
  topics: [
    {
      id: 1,
      title: 'Literary Devices'
    },
    {
      id: 2,
      title: 'Famous Dogs'
    }
  ],
  cards: [
    {
      id: 1,
      topicId: 1,
      word: 'Accumulation',
      definition: 'Accumulation is derived from a Latin word which means "pile up". It is a stylistic device that is defined as a list of words which embody similar abstract or physical qualities or meanings with the intention to emphasize the common qualities that words hold. It is also an act of accumulating the scattered points. Accumulation examples are found in literary pieces and in daily conversations.',
      example: 'Then shall our names,<br>Familiar in his mouth as household words,<br>Harry the King, Bedford and Exeter,<br>Warwick and Talbot, Salisbury and Gloucester,<br>Be in their flowing cups freshly remembered',
      misses: 0,
      hits: 0
    },
    {
      id: 2,
      topicId: 1,
      word: 'Ballad',
      definition: 'The word Ballad is of French provenance. It is a type of poetry or verse which was basically used in dance songs in the ancient France. Later on, during the late 16th and 17th century, it spread over the majority of European nations. Owing to its popularity and emotional appeal, it remained a powerful tool for poets and lyricists to prepare music in the form of lyrical ballads and earn a handsome income from it.',
      example: 'Day after day, day after day<br>We stuck nor breathe, nor motion;<br>As idle as a painted ship<br>Upon a painted ocean',
      misses: 0,
      hits: 0
    },
    {
      id: 3,
      topicId: 1,
      word: 'Cacophony',
      definition: 'If we speak literally, cacophony points to a situation where there is a mixture of harsh and inharmonious sounds. In literature, however, the term refers to the use of words with sharp, harsh, hissing and unmelodious sounds primarily those of consonants to achieve desired results.',
      example: 'I detest war because cause of war is always trivial.',
      misses: 0,
      hits: 0
    },
    {
      id: 4,
      topicId: 1,
      word: 'Dactyl',
      definition: 'Dactyl is a metrical foot, or a beat in a line, containing three syllables in which first one is accented followed by second and third unaccented syllables (accented/unaccented/unaccented) in quantitative meter such as in the word "humanly." In dactyl, we put stress on first syllable and do not stress on second and third syllables, try to say it loud-"HU-man-ly." Dactyl originates from a Greek word dáktylos, which means finger, because it is like bones of human fingers, beginning from central long knuckle, which is followed by two short bones.',
      example: '<b>Half</b> a league, <b>half</b> a league,<br><b>Half</b> a league <b>on</b>ward,<br><b>All</b> in the <b>val</b>ley of <b>Death</b> <br><b>Rode</b> the six <b>hun</b>dred.<br>"<b>For</b>ward, the <b>Light</b> Brigade!<br><b>Charge</b> for the <b>guns</b>!" he said.<br><b>In</b>to the <b>val</b>ley of <b>Death</b><br><b>Rode</b> the six <b>hun</b>dred.',
      misses: 0,
      hits: 0
    },
    {
      id: 5,
      topicId: 1,
      word: 'Elegy',
      definition: 'Elegy is a form of literature which can be defined as a poem or song in the form of elegiac couplets, written in honor of someone deceased. It typically laments or mourns the death of the individual.',
      example: 'My Captain does not answer, his lips are pale and still;<br>My father does not feel my arm, he has no pulse nor will;<br>The ship is anchor’d safe and sound, its voyage closed and done;<br>From fearful trip, the victor ship, comes in with object won;<br>Exult, O shores, and ring, O bells!<br>But I, with mournful tread,<br>Walk the deck my Captain lies,<br>Fallen cold and dead.',
      misses: 0,
      hits: 0
    },
    {
      id: 6,
      topicId: 1,
      word: 'Fable',
      definition: 'The word fable is derived from a Latin word "fibula" which means a story that is a derivative of a word "fari" which means to speak. Fable is a literary device which can be defined as a concise and brief story intended to provide a moral lesson at the end.',
      example: 'Now, comrades, what is the nature of this life of ours? Let us face it: our lives are miserable, laborious, and short. We are born, we are given just so much food as will keep the breath in our bodies… and the very instant that our usefulness has come to an end…. No animal in England knows the meaning of happiness or leisure after he is a year old. No animal in England is free. The life of an animal is misery and slavery….',
      misses: 0,
      hits: 0
    },
    {
      id: 7,
      topicId: 1,
      word: 'Genre',
      definition: 'Genre means the type of art, literature or music characterized by a specific form, content and style. For example, literature has four main genres; poetry, drama, fiction and non-fiction. All of these genres have particular features and functions that distinguish them from one another. Hence, it is necessary on the part of readers to know which category of genre they are reading in order to understand the message it conveys, as they may have certain expectations prior to the reading concerned.',
      example: '',
      misses: 0,
      hits: 0
    },
    {
      id: 8,
      topicId: 1,
      word: 'Haiku',
      definition: 'A haiku poem has three lines, where the first and last lines have five moras, while the middle line has seven. The pattern in Japanese genre is 5-7-5. The mora is another name of a sound unit, which is like a syllable, but it is different from a syllable. As the moras cannot be translated into English, they are modified and syllables are used instead. The lines of such poems rarely rhyme with each other.',
      example: 'Autumn moonlight-<br>a worm digs silently<br>into the chestnut.',
      misses: 0,
      hits: 0
    },
    {
      id: 9,
      topicId: 1,
      word: 'Iamb',
      definition: 'An iamb is a literary device that can be defined as a foot containing unaccented and short syllables followed by a long and accented syllable in a single line of a poem (unstressed/stressed syllables). Two of Robert Frost`\'`s poems <i>Dust of Snow</i> and <i>The Road not Taken</i> are considered two of the most popular examples of iamb.',
      example: 'Has <b>giv</b>en my <b>heart</b><br>A <b>change</b> of <b>mood</b><br>And <b>saved</b> some <b>part</b><br>Of a <b>day</b> I had <b>rued</b>.',
      misses: 0,
      hits: 0
    },
    {
      id: 10,
      topicId: 1,
      word: 'Jargon',
      definition: 'Jargon is a literary term that is defined as a use of specific phrases and words by writers in a particular situation, profession or trade. These specialized terms are used to convey hidden meanings accepted and understood in that field. Jargon examples are found in literary and non-literary pieces of writing.',
      example: 'Certain medications can cause or worsen nasal symptoms (especially congestion). These include the following: birth control pills, some drugs for high blood pressure (e.g., alpha blockers and beta blockers), antidepressants, medications for erectile dysfunction, and some medications for prostatic enlargement. If rhinitis symptoms are bothersome and one of these medications is used, ask the prescriber if the medication could be aggravating the condition.',
      misses: 0,
      hits: 0
    }
  ],
  count: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + (action.payload || 1)
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - (action.payload || 1)
      }
    default:
      return state
  }
}

export {
  increment,
  decrement,
  reducer
}