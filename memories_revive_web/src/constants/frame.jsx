import black_marble from '../assets/frame/marbre-noir.jpg'
import white_marble from '../assets/frame/marbre-blanc.jpg'

import porsche_911_turbo from "../assets/frame/models/porsche-911-turbo-model.png"
import porsche_911_turbo_s from "../assets/frame/models/porsche-911-turbo-s-model.png"
import porsche_991_gt3 from "../assets/frame/models/porsche-991-gt3-model.png"
import porsche_911_gt3rs from "../assets/frame/models/porsche-911-gt3rs-model.png"

export const style_selector = [
    {
        title: "Clair",
        color: "#F2F2F2",
    },
    {
        title: "Sombre",
        color: "#373737",
    }
]

export const models = [
    {
        name: "Porsche 911 turbo",
        key: "porsche-911-turbo",
        brand: "Porsche",
        model: "911 Turbo",
        image: porsche_911_turbo
    },
    {
        name: "Porsche 911 GT3RS",
        key: "porsche-911-gt3rs",
        brand: "Porsche",
        model: "GT3 RS",
        image: porsche_911_gt3rs
    },
    {
        name: "Porsche 991 GT3",
        key: "porsche-991-gt3",
        brand: "Porsche",
        model: "911 GT3",
        image: porsche_991_gt3
    },
    {
        name: "Porsche 911 turbo S",
        key: "porsche-911-turbo-s",
        brand: "Porsche",
        model: "911 Turbo S",
        image: porsche_911_turbo_s
    },
]

export const frame_selector = [
    {
        title: "Acier blanc",
        color: "#fff",
    },
    {
        title: "Acien anthracite",
        color: "#292929",
    },
    {
        title: "Marbre blanc",
        image: white_marble,
    },
    {
        title: "Marbre noir",
        image: black_marble
    },
]