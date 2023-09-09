// интерфейсы
// interface в TypeScript - это абстрактное описание структуры объекта, определяющее его свойства и методы без предоставления реализации.
interface Rect {
    readonly id: string,
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}
const rect2: Rect = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    }
}
rect2.color = 'black'

const rect3 = {} as Rect
const rect4 = <Rect>{}

// ====================================
// Наследование интерфейсов

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '1',
    size: {
        width: 43,
        height: 12
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

// ===========================
// 1) Интерфейсы с большой буквы, 2) взаимодействие классов с интерфейсами

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

//  =========================
interface Styles {
    [key: string]: string
}
const css: Styles = {
    border: '1px solid black',
    marginTop: '10px',
    borderRadius: '5px'
}