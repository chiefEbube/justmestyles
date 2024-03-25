import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1em;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 50px;
    padding: 25px;
    display: flex;
    align-items: center;
`;

// .navigation {
    

//     .logo-container {
       

//         .logo {
//             width: 50px;
//             height: 50px;
//             border-radius: 100%;
//         }
//     }

//     .nav-links-container {
//         width: 50%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: flex-end;

//         .nav-link {
//             padding: 10px 15px;
//             cursor: pointer;
//         }
//     }
// }