import { Module } from '@nestjs/common';
import { GetNoteService } from './services/get-note/get-note/get-note.service';

@Module({
  providers: [GetNoteService]
})
export class NoteModule {}
