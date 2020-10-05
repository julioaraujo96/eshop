import React from 'react';
import styles from './LeftSideBar.module.scss';
import Logo from '../../assets/img/sneakers.svg';
import menuSVG from '../../assets/img//open-menu.svg'
import { IconButton } from '@material-ui/core';
import {motion} from 'framer-motion';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';


const icon = {
    hidden: {
      opacity:0,
      pathLength: 0,
    //   fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity:1,
      pathLength: 1,
    //   fill: "rgba(0, 0, 0, 1)",
    }
  };

const LeftSidebar =({setShowMenu})=> (
    <div className={styles.LeftSideBar}>
        <IconButton>
        <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="item"
    >
      <motion.path
        d="m495.59 325.47-8-24a7.912 7.912 0 0 0 -.442-1.041h.008l-6.783-13.576a46.87 46.87 0 0 0 -35.566-25.453c-17.138-2.326-49.723-6.944-75.406-11.735-2.7-.5-5.314-1.008-7.835-1.512-5.647-1.128-13.254-3.643-22.614-7.478-10.982-4.5-24.376-10.824-39.812-18.8-8.785-4.535-18.439-9.725-28.7-15.426-9.6-5.33-19.819-11.173-30.372-17.364-8.217-4.826-14.485-8.611-17.632-10.523l-23.771-59.42a32.132 32.132 0 0 0 -35.265-19.63l-116.38 20.538a7.991 7.991 0 0 0 -1.972.485c-4.509 1.748-5.4 5.139-8.718 17.755-2.076 7.893-4.592 18.327-7.084 29.377-1.517 6.72-3.088 13.964-4.671 21.546-2.643 12.81-4.771 24.217-6.322 33.891-.985 6.1-1.729 11.5-2.208 16.049-3.4 31.937-.406 68.979-.045 73.2v32.667a31.921 31.921 0 0 0 30.645 31.973c50.055 2.107 174.567 7.007 249.355 7.007 97.889 0 163.869-32.99 195.578-48.845a8 8 0 0 0 4.012-9.685zm-29.527-31.465 3.067 6.137c-29.391 12.128-76.855 18.452-147.414 19.642l18.71-20.411c6.722.186 14.233.324 21.777.324 10.929 0 21.907-.288 30.574-1.135 17.125-1.672 40.644-10.876 58.406-18.854a30.6 30.6 0 0 1 14.88 14.297zm-278.35-159.174 3 7.486-80.775 63.908c-23.009-3.916-50.515-13.54-68.293-20.377.733-3.433 1.461-6.786 2.179-10.028zm-53.739 72.774 62.933-49.791 6.445 16.11c-15.875 11.529-45.408 30.744-69.378 33.681zm-102.018 33.233c.155-1.47.342-3.046.557-4.711l73.4 33.873 18.679 42.024c-42.695-3.053-78.687-6.129-93.109-7.393-.798-12.415-2.058-40.004.473-63.793zm110.705 72.446-23.35-52.533a8.012 8.012 0 0 0 -3.958-4.015l-80.307-37.061q1.423-8.273 3.325-17.942c21.591 8.217 49.258 17.41 72.588 20.861l.144.019a117.039 117.039 0 0 0 16.897 1.387c12.057 0 25.226-3.855 38.012-9.458 17.488 17.635 35.769 31.288 54.409 40.613a430.888 430.888 0 0 0 55.924 23.132c-5.938 10.643-16.8 24.819-31.192 40.621-28.972-1.085-63.407-2.975-102.492-5.624zm152.928-38.751c3.552-10.64 5.6-22.633 6.787-33.078q10.5 5.23 19.556 9.3l-7.589 7.59 11.314 11.314 12.2-12.2c5.518 2.133 10.4 3.787 14.724 4.978l-52.76 57.556c-1.273 0-2.532.01-3.822.01-8.914 0-18.988-.145-30.077-.431 12.643-14.778 25.233-31.748 29.667-45.039zm75.249-8.336c16.443 2.974 34.878 5.817 51.266 8.183-10.755 3.974-22.061 7.4-30.882 8.258-10.157.992-24.14 1.143-36.382 1.011zm-147.765-68.584-12.73 12.73 11.314 11.314 15.657-15.657q8.237 4.792 16.12 9.252l-11.091 11.091 11.314 11.314 14.3-14.3c6.679 3.672 13.078 7.112 19.124 10.28a181.346 181.346 0 0 1 -4.869 29.743 414.551 414.551 0 0 1 -54.637-22.531c-15.5-7.753-31.374-19.35-46.373-33.8a289.026 289.026 0 0 0 28.575-18.028 7.988 7.988 0 0 0 2.025 1.8c.061.027 4.303 2.636 11.271 6.792zm-56.9-82.344a16.072 16.072 0 0 1 14.526 4.922l-132.8 37.828c2.6-10.908 4.659-18.725 5.9-22.919zm129.827 252.731c-74.484 0-198.725-4.891-248.684-6.993a15.958 15.958 0 0 1 -15.316-15.987v-24.281c17.247 1.5 58.09 4.962 104.762 8.182 42.929 2.948 80.445 5.006 111.507 6.114 18.184.641 34.244.965 47.731.965q3.736 0 7.385-.02c83.9-.367 137.669-6.89 171.835-21.023l2.993 8.981c-32.588 16.117-94.058 44.062-182.213 44.062z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
            default: { duration: 3, ease: "easeInOut" },
            // fill: { duration: 2, ease: [1, 0, 0.8, 1] }
          }}
      />
    </motion.svg>
        </IconButton>
        <IconButton  onClick={()=>setShowMenu(true)}>
            <img src={menuSVG} alt='menu' className={styles.menu} />
        </IconButton>
        <div>
            <div className={styles.socialsContainer}>
                <div className={styles.textHide}>
                    <p>Social <br></br>Networks</p>
                    <div className={styles.socialIcons}>
                        <GitHubIcon fontSize="large" className={styles.icons}/>
                        <InstagramIcon fontSize="large" className={styles.icons}/>
                        <TwitterIcon fontSize="large" className={styles.icons}/>
                        <FacebookIcon fontSize="large" className={styles.icons}/>
                    </div>
                </div>
            </div>
        </div>
  </div>
  		
  
);

export default LeftSidebar