---
title: "AI Song Maker (GPT)"
slug: "ai_song_maker_gpt"
---1. Ejecutar el código necesario para generar los archivos MIDI y MusicXML corregido

%run /mnt/data/add_libraries_py
from ai_song_maker import song_maker

1. Define the ABC notation for each part

abc_notation_meta = """
M:4/4
L:1/4
Q:1/4=120
K:Emin
"""

abc_notation_guitar = """V:1 clef=treble name="Guitar" snm="G"
|: E2 E2 | z E G | A2 A2 | z A B :| %[16]
"""

abc_notation_bass = """V:2 clef=bass name="Bass" snm="B"
|: E,,2 E,,2 | G,,2 G,,2 | A,,2 A,,2 | B,,2 B,,2 :| %[16]
"""

abc_notation_drums = """V:3 clef=perc name="Drums" snm="D"
|: z2 z2 | z2 z2 | z2 z2 | z2 z2 :| %[16]
"""

1. Combine the parts into a single ABC notation

abc_notation = abc_notation_meta + abc_notation_guitar + abc_notation_bass + abc_notation_drums
ordered_part_instrument = {'Guitar': 'Electric Guitar (clean)', 'Bass': 'Electric Bass', 'Drums': 'Drum Kit'}

1. Define the file paths for the output

musicxml_path = '/mnt/data/rock_improvisation_musicxml.xml'
midi_path = '/mnt/data/rock_improvisation_midi.mid'

1. Process the ABC notation to create the music files

parts_data, score_data = song_maker.process_abc(abc_notation, ordered_part_instrument, musicxml_path, midi_path)

1. Provide the paths to check if the files are generated successfully

musicxml_path, midi_path