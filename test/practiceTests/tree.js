function Node(value) {
    this.value = value
    this.children = []
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
a.children.push(b, c, d)

const e = new Node('E')
const k = new Node('K')
const l = new Node('L')
e.children.push(k, l)
b.children.push(e)

const f = new Node('F')
const g = new Node('G')
const h = new Node('H')
c.children.push(f, g, h)

const m = new Node('M')
h.children.push(m)

const i = new Node('I')
const j = new Node('J')
d.children.push(i, j)

export default  a
