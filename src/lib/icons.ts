import { FaTools, FaGithub, FaLinkedin, FaUserLock, FaLaptopCode, FaMusic, FaEnvelope } from "react-icons/fa";
import { FaHouse, FaIdCard, FaIndustry,FaMessage, FaMosquito, FaTruck } from "react-icons/fa6"; 
import { IoDiamondOutline, IoLogoWhatsapp } from "react-icons/io5";
import { TbApi, TbWorldCode } from "react-icons/tb";
import { GiFullMotorcycleHelmet } from "react-icons/gi";

export const navIcons ={
    home: FaHouse,
    about: FaIdCard,
    projects: FaIndustry,
    skills: FaTools,
    contact: FaMessage
}

export const heroIcons = {
    gitHub: FaGithub,
    linkedIn: FaLinkedin
}

export const projectsIcons = {
    diamond: IoDiamondOutline,
    lock: FaUserLock,
    api: TbApi,
    truck: FaTruck,
    mosquito: FaMosquito
}

export const aboutIcons = {
    laptop: FaLaptopCode,
    music: FaMusic,
    helmet: GiFullMotorcycleHelmet,
    openSource: TbWorldCode
}

export const contactIcons = {
    mail: FaEnvelope,
    wp: IoLogoWhatsapp
}

export const footerIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    mail: FaEnvelope

}