const FULL_GRADE_NAME = [
    ['','Bronze','Silver','Gold','Platinum','Titanium','Palladuim','Mythril','Emerald','Topaz'],
    ['','Tier I','Tier II','Tier III','Tier IV','Tier V','Tier VI','Tier VII','Tier VIII','Tier IX','Tier X','Beyond-Reality Tier'],
]
const GRADE = {
    unl() { return hasTree('glx5') },
    getGrade() {
        let b = tmp.grade.t_base
        let x = player.galaxy.stars.max(1).log(b).mul(2.15).mul(tmp.chal?tmp.chal.eff[19]:1).scaleEvery('grading',true)
        return x.floor()
    },
    getNextGrade() {
        let b = tmp.grade.t_base
        let l = E(b).pow(player.galaxy.grade.theorems.scaleEvery('grading',false).div(tmp.chal?tmp.chal.eff[19]:1).div(2.15).add(1))

        return l
    },
    spentGrades() {
        let x = E(0)
        for (let i = 0; i < player.galaxy.grade.type.length; i++) {
             x = x.add(player.galaxy.grade.type[i])
        }
        return x
    },
    particle: {
        names: ["Elliptical","Barred","Spiral",'Nebula','Ring'],
        weight: [6,4,2,0,0],
        total_w: 12,
        chance: [],
power: [
    p=>{
        let pow = E(1).mul(p.gte(100)?3:p.gte(90)?2.8:p.gte(80)?2.6:p.gte(70)?2.4:p.gte(60)?2.2:p.gte(50)?2:p.gte(40)?1.8:p.gte(30)?1.6:p.gte(20)?1.4:p.gte(10)?1.2:1)
        let tierPow = E(1).mul(p.gte(1000)?2.5:p.gte(900)?2.4:p.gte(800)?2.3:p.gte(700)?2.2:p.gte(600)?2.1:p.gte(500)?2:p.gte(400)?1.8:p.gte(300)?1.6:p.gte(200)?1.4:p.gte(100)?1.2:1)
        return pow.mul(tierPow)
    },
    p=>{
        let pow = E(1).mul(p.gte(100)?3:p.gte(90)?2.8:p.gte(80)?2.6:p.gte(70)?2.4:p.gte(60)?2.2:p.gte(50)?2:p.gte(40)?1.8:p.gte(30)?1.6:p.gte(20)?1.4:p.gte(10)?1.2:1)
        let tierPow = E(1).mul(p.gte(1000)?3:p.gte(900)?2.8:p.gte(800)?2.6:p.gte(700)?2.4:p.gte(600)?2.2:p.gte(500)?2:p.gte(400)?1.8:p.gte(300)?1.6:p.gte(200)?1.4:p.gte(100)?1.2:1)
        return pow.mul(tierPow)
    },
    p=>{
        let pow = E(1).mul(p.gte(100)?3:p.gte(90)?2.8:p.gte(80)?2.6:p.gte(70)?2.4:p.gte(60)?2.2:p.gte(50)?2:p.gte(40)?1.8:p.gte(30)?1.6:p.gte(20)?1.4:p.gte(10)?1.2:1)
        let tierPow = E(1).mul(p.gte(1000)?3:p.gte(900)?2.8:p.gte(800)?2.6:p.gte(700)?2.4:p.gte(600)?2.2:p.gte(500)?2:p.gte(400)?1.8:p.gte(300)?1.6:p.gte(200)?1.4:p.gte(100)?1.2:1)
        return pow.mul(tierPow)
    },
    p=>{
        let pow = E(1).mul(p.gte(100)?3:p.gte(90)?2.8:p.gte(80)?2.6:p.gte(70)?2.4:p.gte(60)?2.2:p.gte(50)?2:p.gte(40)?1.8:p.gte(30)?1.6:p.gte(20)?1.4:p.gte(10)?1.2:1)
        let tierPow = E(1).mul(p.gte(1000)?3:p.gte(900)?2.8:p.gte(800)?2.6:p.gte(700)?2.4:p.gte(600)?2.2:p.gte(500)?2:p.gte(400)?1.8:p.gte(300)?1.6:p.gte(200)?1.4:p.gte(100)?1.2:1)
        return pow.mul(tierPow)
    },
    p=>{
        let pow = E(1).mul(p.gte(100)?3:p.gte(90)?2.8:p.gte(80)?2.6:p.gte(70)?2.4:p.gte(60)?2.2:p.gte(50)?2:p.gte(40)?1.8:p.gte(30)?1.6:p.gte(20)?1.4:p.gte(10)?1.2:1)
        let tierPow = E(1).mul(p.gte(1000)?3:p.gte(900)?2.8:p.gte(800)?2.6:p.gte(700)?2.4:p.gte(600)?2.2:p.gte(500)?2:p.gte(400)?1.8:p.gte(300)?1.6:p.gte(200)?1.4:p.gte(100)?1.2:1)
        return pow.mul(tierPow)
    },
],
        eff: [
            p=>{
                let pow = tmp.grade.power[0]
                let x = [p.add(1).root(2).pow(pow),p.add(1).pow(1.75).pow(pow)]
                return x
            },
            p=>{
                let pow = tmp.grade.power[1]
                
                let x = [p.add(1).pow(4.35).pow(pow),p.add(1).root(20).pow(pow)]
                return x
                },
            p=>{
                let pow = tmp.grade.power[2]
                let x = [p.add(1).pow(1.5).div(10).pow(pow)]
                return x
            },
            p=>{
                let pow = tmp.grade.power[3]
                let x = [p.pow(0.5).div(10).pow(pow).mul(hasAscension(1,4)?ascensionEff(1,4):1)]
                return x
            },
            p=>{
                let pow = tmp.grade.power[4]
                let x = [p.add(1).root(10).pow(pow).softcap(1.75,0.1,0)]
                return x
            },
        ],
        effDesc: [
            x=>{ return `Boost Galaxy Particles gain. <b class='sky'>(x${format(x[0])})</b><br> Boost 4th Dark Shadow effect. <b class='sky'>(x${format(x[1])})</b>` },
            x=>{ return `Boost Infinity gain. <b class='sky'>(x${format(x[0])})</b><br> Increase the Power of theorems. <b class='sky'>(${formatPercent(x[1]-1)})</b>` },
            x=>{ return `Boost Galaxy Particles generator base exponent. <b class='sky'>(+${format(x[0])})</b>` },
            x=>{ return `Newton Modificator effect softcap starts later. <b class='sky'>(+${format(x[0])})</b>` },
            x=>{ return `Supercritical Supernovas starts later. <b class='sky'>(^${format(x[0])})</b>` },
        ],
        effPow: [
            pow=>{ return `Effects Power: <b class='sky'>(${formatPercent(pow)})</b>` },
            pow=>{ return `Effects Power: <b class='sky'>(${formatPercent(pow)})</b>` },
            pow=>{ return `Effects Power: <b class='sky'>(${formatPercent(pow)})</b>` },
            pow=>{ return `Effects Power: <b class='sky'>(${formatPercent(pow)})</b>` },
            pow=>{ return `Effects Power: <b class='sky'>(${formatPercent(pow)})</b>` },
        ],
    },
}

function giveRandomPGrading(v, max=false) {
    if (!GRADE.unl()) return

    let s = max?tmp.grade.unspent:E(v)
    if (!max) s = s.min(tmp.grade.unspent)

    let tw = tmp.grade.total_w
    let s_div = s.div(tw).floor()
    let sm = s.mod(tw).floor().toNumber()

    for (let x in GRADE.particle.names) player.galaxy.grade.type[x] = player.galaxy.grade.type[x].add(s_div.mul(tmp.grade.w[x]))
    for (let x = 0; x < sm; x++) {
        let c = Math.random()
        for (let y in GRADE.particle.chance) if (c <= GRADE.particle.chance[y]) {
            player.galaxy.grade.type[y] = player.galaxy.grade.type[y].add(1)
            break
        }
    }

    updateGradeTemp()
}

function respecPGrading() {
    createConfirm("Are you sure you want to respec all Gradings?",'respectPGs',()=>{
        for (let i =0; i < 5; i++) player.galaxy.grade.type[i] = E(0)
        INF.doReset()
    })
}

function calcGradeChances() {
    var sum = 0
let wTwo = 2
let wThree = 0
let wFour = 0
let totalW = 12
if (hasElement(328)) {
    wFour = 2
totalW += 2
}
    if (hasTree('glx11')) {
        wThree = 3
totalW += 3
    }
    if (hasTree('glx6')) {
wTwo = 3
totalW += 1}
GRADE.particle.weight[4] = wFour
tmp.grade.w[4] = wFour
GRADE.particle.weight[3] = wThree
tmp.grade.w[3] = wThree
GRADE.particle.weight[2] = wTwo
tmp.grade.w[2] = wTwo
tmp.grade.total_w = totalW
GRADE.particle.total_w = totalW
    for (let x in GRADE.particle.names) {
        sum += tmp.grade.w[x]
        GRADE.particle.chance[x] = sum / tmp.grade.total_w
    }
}

function updateGradeTemp() {
    let tp = tmp.grade
    tp.parts = []
    tp.bonus = []
    tp.t_base = E(2680)

    tp.w = [6,4,2,0]
    tp.total_w = 12

    let pt = player.galaxy.grade.theorems
    let pstr = E(1)


    tp.theorems = GRADE.getGrade()
    tp.next_theorem = GRADE.getNextGrade()
    tp.spent_theorem = GRADE.spentGrades()
    tp.unspent = pt.sub(tp.spent_theorem).max(0)
    for (let i = 0; i < player.galaxy.grade.type.length; i++) {
        let pp = player.galaxy.grade.type[i]
        let b = E(0)
        tp.parts[i] = pp
        tp.bonus[i] = b
        tp.eff[i] = GRADE.particle.eff[i](pp.add(b).softcap(100,0.75,0).mul(pstr))
        tp.power[i] = GRADE.particle.power[i](pp.add(b).softcap(100,0.75,0).mul(pstr))
    }

    calcGradeChances()
}
function gradeEffect(x,y,def=1) { return tmp.grade.eff[x][y]||def }
function updateGradeHTML() {
    tmp.el.grade_btns.setDisplay(true)
    tmp.el.grade_theorem.setTxt(format(tmp.grade.unspent,0)+" / "+format(player.galaxy.grade.theorems,0))
    tmp.el.grade_next_theorem.setTxt(format(player.galaxy.stars,2)+" / "+format(tmp.grade.next_theorem,2))
    for (let i = 0; i < player.galaxy.grade.type.length; i++) {
        let pp = player.galaxy.grade.type[i]
        let h = Math.floor(pp / 10) % 10
        let x = Math.floor(pp / 100) % 100
tmp.el['grade_scale'+i].setHTML(`<span class='grade_color${h}'>${FULL_GRADE_NAME[0][h]}</span>`+` <span class='grade_tier_color${x}'>${FULL_GRADE_NAME[1][x]}</span>`)
        tmp.el["grade_part"+i].setTxt(format(tmp.grade.parts[i],0)+(tmp.grade.bonus[i].gt(0)?" + "+tmp.grade.bonus[i].format(0):""))
        tmp.el["grade_part_pow"+i].setHTML(GRADE.particle.effPow[i](tmp.grade.power[i]))
        tmp.el["grade_part_eff"+i].setHTML(GRADE.particle.effDesc[i](tmp.grade.eff[i]))
    }
}