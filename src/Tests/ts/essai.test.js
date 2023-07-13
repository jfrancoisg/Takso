import { describe, it, expect } from 'vitest'
import { demarrerP } from '../../../public/assets/js/app'

describe('Chronometre', () => {
    it('Limite de temps de la présentation du projet', () => {
        const result = demarrerP()
        expect(result).toBe(60 * 35);
    });
});
