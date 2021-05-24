function chordifyy(chord){
  if(chord==='Cmaj'){
    return ['C','E','G'];
  }
  else if (chord==='C#maj') {
    return ['C#','E#','G#']
  }
  else if (chord==='Dmaj') {
    return ['D','F#','A']
  }
  else if (chord==='Ebmaj') {
    return ['Eb','G','Bb']
  }
  else if (chord==='Emaj') {
    return ['E','G#','B']
  }
  else if (chord==='Fmaj') {
    return ['F','A','C']
  }
  else if (chord==='F#maj') {
    return ['F#','A#','C#']
  }
  else if (chord==='Gmaj') {
    return ['G','B','D']
  }
  else if (chord==='Abmaj') {
    return ['Ab','C','Eb']
  }
  else if (chord==='Amaj') {
    return ['A','C#','E']
  }
  else if (chord==='Bbmaj') {
    return ['Bb','D','F']
  }
  else if (chord==='Bmaj') {
    return ['B','D#','F#']
  }


  //minor

  else if(chord==='Cm'){
    return ['C','Eb','G'];
  }
  else if (chord==='C#m') {
    return ['C#','E','G#']
  }
  else if (chord==='Dm') {
    return ['D','F','A']
  }
  else if (chord==='Ebm') {
    return ['Eb','Gb','Bb']
  }
  else if (chord==='Em') {
    return ['E','G','B']
  }
  else if (chord==='Fm') {
    return ['F','Ab','C']
  }
  else if (chord==='F#m') {
    return ['F#','A','C#']
  }
  else if (chord==='Gm') {
    return ['G','Bb','D']
  }
  else if (chord==='Abm') {
    return ['Ab','Cb','Eb']
  }
  else if (chord==='Am') {
    return ['A','C','E']
  }
  else if (chord==='Bbm') {
    return ['Bb','Db','F']
  }
  else if (chord==='Bm') {
    return ['B','D','F#']
  }

  //diminished

  else if(chord==='Cdim'){
    return ['C','Eb','Gb'];
  }
  else if (chord==='C#dim') {
    return ['C#','E','G']
  }
  else if (chord==='Ddim') {
    return ['D','F','Ab']
  }
  else if (chord==='Ebdim') {
    return ['Eb','Gb','A']
  }
  else if (chord==='Edim') {
    return ['E','G','Bb']
  }
  else if (chord==='Fdim') {
    return ['F','Ab','B']
  }
  else if (chord==='F#dim') {
    return ['F#','A','C']
  }
  else if (chord==='Gdim') {
    return ['G','Bb','Db']
  }
  else if (chord==='Abdim') {
    return ['Ab','Cb','D']
  }
  else if (chord==='Adim') {
    return ['A','C','Eb']
  }
  else if (chord==='Bbdim') {
    return ['Bb','Db','E']
  }
  else if (chord==='Bdim') {
    return ['B','D','F']
  }

//Diminished 7th

else if(chord==='Cdim7'){
  return ['C','Eb','Gb','A'];
}
else if (chord==='C#dim7') {
  return ['C#','E','G','Bb']
}
else if (chord==='Ddim7') {
  return ['D','F','Ab','B']
}
else if (chord==='Ebdim7') {
  return ['Eb','Gb','A','C']
}
else if (chord==='Edim7') {
  return ['E','G','Bb','Db']
}
else if (chord==='Fdim7') {
  return ['F','Ab','B','D']
}
else if (chord==='F#dim7') {
  return ['F#','A','C','Eb']
}
else if (chord==='Gdim7') {
  return ['G','Bb','Db','E']
}
else if (chord==='Abdim7') {
  return ['Ab','Cb','D','F']
}
else if (chord==='Adim7') {
  return ['A','C','Eb','Gb']
}
else if (chord==='Bbdim7') {
  return ['Bb','Db','E','G']
}
else if (chord==='Bdim7') {
  return ['B','D','F','Ab']
}


//Augmented

else if(chord==='Caug'){
  return ['C','E','G#'];
}
else if (chord==='C#aug') {
  return ['C#','F','A']
}
else if (chord==='Daug') {
  return ['D','F#','A#']
}
else if (chord==='Ebaug') {
  return ['Eb','G#','B']
}
else if (chord==='Eaug') {
  return ['E','G#','C']
}
else if (chord==='Faug') {
  return ['F','A','C#']
}
else if (chord==='F#aug') {
  return ['F#','A#','D']
}
else if (chord==='Gaug') {
  return ['G','B','D#']
}
else if (chord==='Abaug') {
  return ['Ab','C','D#']
}
else if (chord==='Aaug') {
  return ['A','C#','F']
}
else if (chord==='Bbaug') {
  return ['Bb','D','F']
}
else if (chord==='Baug') {
  return ['B','D#','G']
}

//Dominant 7th

else if(chord==='C7'){
  return ['C','E','G','Bb'];
}
else if (chord==='C#7') {
  return ['C#','F','G#','B']
}
else if (chord==='D7') {
  return ['D','F#','A','C']
}
else if (chord==='Eb7') {
  return ['Eb','G','Bb','Db']
}
else if (chord==='E7') {
  return ['E','G#','B','D']
}
else if (chord==='F7') {
  return ['F','A','C','Eb']
}
else if (chord==='F#7') {
  return ['F#','A#','C#','E']
}
else if (chord==='G7') {
  return ['G','B','D','F']
}
else if (chord==='Ab7') {
  return ['Ab','C','Eb','Gb']
}
else if (chord==='A7') {
  return ['A','C#','E','G']
}
else if (chord==='Bb7') {
  return ['Bb','D','F','Ab']
}
else if (chord==='B7') {
  return ['B','D#','F#','A']
}

//minor 7th
else if(chord==='Cm7'){
  return ['C','Eb','G','Bb'];
}
else if (chord==='C#m7') {
  return ['C#','E','G#','B']
}
else if (chord==='Dm7') {
  return ['D','F','A','C']
}
else if (chord==='Ebm7') {
  return ['Eb','Gb','Bb','Db']
}
else if (chord==='Em7') {
  return ['E','G','B','D']
}
else if (chord==='Fm7') {
  return ['F','Ab','C','Eb']
}
else if (chord==='F#m7') {
  return ['F#','A','C#','E']
}
else if (chord==='Gm7') {
  return ['G','Bb','D','F']
}
else if (chord==='Abm7') {
  return ['Ab','B','Eb','Gb']
}
else if (chord==='Am7') {
  return ['A','C','E','G']
}
else if (chord==='Bbm7') {
  return ['Bb','D','F','Ab']
}
else if (chord==='Bm7') {
  return ['B','D','F#','A']
}

//major 7th
else if(chord==='Cmaj7'){
  return ['C','E','G','B'];
}
else if (chord==='C#maj7') {
  return ['C#','F','G#','C']
}
else if (chord==='Dmaj7') {
  return ['D','F#','A','C#']
}
else if (chord==='Ebmaj7') {
  return ['Eb','G','Bb','D']
}
else if (chord==='Emaj7') {
  return ['E','G#','B','D#']
}
else if (chord==='Fmaj7') {
  return ['F','A','C','E']
}
else if (chord==='F#maj7') {
  return ['F#','A#','C#','F']
}
else if (chord==='Gmaj7') {
  return ['G','B','D','F#']
}
else if (chord==='Abmaj7') {
  return ['Ab','C','Eb','G']
}
else if (chord==='Amaj7') {
  return ['A','C#','E','G#']
}
else if (chord==='Bbmaj7') {
  return ['Bb','D','F','A']
}
else if (chord==='Bmaj7') {
  return ['B','D#','F#','A#']
}

//Suspended 4th

else if(chord==='Csus4'){
  return ['C','F','G'];
}
else if (chord==='C#sus4') {
  return ['C#','F#','G#']
}
else if (chord==='Dsus4') {
  return ['D','G','A']
}
else if (chord==='Ebsus4') {
  return ['Eb','Ab','Bb']
}
else if (chord==='Esus4') {
  return ['E','A','B']
}
else if (chord==='Fsus4') {
  return ['F','Bb','C']
}
else if (chord==='F#sus4') {
  return ['F#','B','C#']
}
else if (chord==='Gsus4j') {
  return ['G','C','D']
}
else if (chord==='Absus4') {
  return ['Ab','C','Eb']
}
else if (chord==='Asus4') {
  return ['A','D','E']
}
else if (chord==='Bbsus4') {
  return ['Bb','Eb','F']
}
else if (chord==='Bsus4') {
  return ['B','E','F#']
}

//7th suspended 4th
else if(chord==='C7sus4'){
  return ['C','F','G','Bb'];
}
else if (chord==='C#7sus4') {
  return ['C#','F#','G#','B']
}
else if (chord==='D7sus4') {
  return ['D','G','A','C']
}
else if (chord==='Eb7sus4') {
  return ['Eb','Ab','Bb','Db']
}
else if (chord==='E7sus4') {
  return ['E','A','B','D']
}
else if (chord==='F7sus4') {
  return ['F','Bb','C','Eb']
}
else if (chord==='F#7sus4') {
  return ['F#','B','C#','E']
}
else if (chord==='G7sus4') {
  return ['G','C','D','F']
}
else if (chord==='Ab7sus4') {
  return ['Ab','Db','Eb','Gb']
}
else if (chord==='A7sus4') {
  return ['A','D','E','G']
}
else if (chord==='Bb7sus4') {
  return ['Bb','Eb','F','Ab']
}
else if (chord==='B7sus4') {
  return ['B',E#','F#','A']
}

//major 6th
else if(chord==='Cmaj6'){
  return ['C','E','G','A'];
}
else if (chord==='C#maj6') {
  return ['C#','E#','G#','A#']
}
else if (chord==='Dmaj6') {
  return ['D','F#','A','B']
}
else if (chord==='Ebmaj6') {
  return ['Eb','G','Bb','C']
}
else if (chord==='Emaj6') {
  return ['E','G#','B','C#']
}
else if (chord==='Fmaj6') {
  return ['F','A','C','D']
}
else if (chord==='F#maj6') {
  return ['F#','A#','C#','D#']
}
else if (chord==='Gmaj6') {
  return ['G','B','D','E']
}
else if (chord==='Abmaj6') {
  return ['Ab','C','Eb','F']
}
else if (chord==='Amaj6') {
  return ['A','C#','E','F#']
}
else if (chord==='Bbmaj6') {
  return ['Bb','D','F','G']
}
else if (chord==='Bmaj6') {
  return ['B','D#','F#','G#']
}

//minor 6th
else if(chord==='Cm6'){
  return ['C','Eb','G','A'];
}
else if (chord==='C#m6') {
  return ['C#','E','G#','A#']
}
else if (chord==='Dm6') {
  return ['D','F','A','B']
}
else if (chord==='Ebm6') {
  return ['Eb','Gb','Bb','C']
}
else if (chord==='Em6') {
  return ['E','G','B','C#']
}
else if (chord==='Fm6') {
  return ['F','Ab','C','D']
}
else if (chord==='F#m6') {
  return ['F#','A','C#','D#']
}
else if (chord==='Gm6') {
  return ['G','Bb','D','E']
}
else if (chord==='Abm6') {
  return ['Ab','Cb','Eb','F']
}
else if (chord==='Am6') {
  return ['A','C','E','F#']
}
else if (chord==='Bbm6') {
  return ['Bb','Db','F','G']
}
else if (chord==='Bm6') {
  return ['B','D','F#','G#']
}

}





module.exports.chordifyy = chordifyy;
