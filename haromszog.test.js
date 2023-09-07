const haromszog = require('./haromszog')

describe('Háromszögek tesztelése', () => {
    test('HáromszögEgyenlőtlenség 4 5 6 = Igaz', () => {
        expect(haromszog.egyenlotlenseg(4, 5, 6)).toBe(true);
    });
    test('HáromszögEgyenlőtlenség 6 8 10 = Igaz', () => {
        expect(haromszog.egyenlotlenseg(6, 8, 10)).toBe(true);
    });
    test('HáromszögEgyenlőtlenség 5 12 13 = Igaz', () => {
        expect(haromszog.egyenlotlenseg(5, 12, 13)).toBe(true);
    });

    test('HáromszögEgyenlőtlenség 1 2 3  = Hamis', () => {
        expect(haromszog.egyenlotlenseg(1, 2, 3)).toBe(false);
    });
    
    
    test('Haromszög területe a = 5 b= 2 5', () => {
        expect(haromszog.terulet(2, 5)).toBe(5);
    });

    test('Haromszög területe a = 20 b= 10 100', () => {
        expect(haromszog.terulet(20, 10)).toBe(100);
    });

    test('Haromszög kerulete 4, 5, 6 = 15', () => {
        expect(haromszog.kerulet(4, 5 , 6)).toBe(15);
    });
    test('Haromszög kerulete 6, 8, 10 = 24', () => {
        expect(haromszog.kerulet(6, 8 , 10)).toBe(24);
    });
    
    
})