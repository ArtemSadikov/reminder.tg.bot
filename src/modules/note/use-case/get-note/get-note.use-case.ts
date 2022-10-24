import { GetNoteUseCasePort } from '../../ports/note/in/use-case/get-note.use-case.port.interface';

export const GetNoteUseCaseSymbol = Symbol.for('GetNoteUseCase');

export class GetNoteUseCase implements GetNoteUseCasePort {}
