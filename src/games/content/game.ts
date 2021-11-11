import { GameDifficulty, GamePhase } from '@shared/types';

export class Game {
    public cash: number;
    public phase: GamePhase = 0;
    public turn = 1;
    public is_running = true;
    public difficulty: GameDifficulty;

    constructor(
        public player_id: number,
        public store_name: string,
        difficultyLevel: GameDifficulty,
    ) {
        this.setCash(difficultyLevel);
        this.difficulty = difficultyLevel;
    }

    setCash(difficultyLevel: GameDifficulty) {
        switch (difficultyLevel) {
            case GameDifficulty.Easy:
                this.cash = 30;
                break;
            case GameDifficulty.Hard:
                this.cash = 0;
                break;
            // medium dificulty
            default:
                this.cash = 15;
        }
    }
}
