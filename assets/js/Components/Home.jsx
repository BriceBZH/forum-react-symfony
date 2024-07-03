// // import React from 'react';

// // const Home = () => {
// //     return (
// //         <div>
// //             <h1>Accueil</h1>
// //             <p>Bienvenue sur la page d'accueil.</p>
// //         </div>
// //     );
// // };

// // export default Home;


// import React, { useEffect, useState } from 'react';

// const Home = () => {
//     const [sections, setSections] = useState([]);

//     useEffect(() => {
//         fetch('/sections')
//             .then(response => response.json())
//             .then(data => setSections(data.sections))
//             .catch(error => console.error('Error fetching sections:', error));
//     }, []);

//     return (
//         <div>
//             <h1>PLop</h1>
//             <table>
//                 <tbody>
//                     {sections.map(section => (
//                         <tr key={section.id}>
//                             <td>{section.title}</td>
//                             <td>{section.description}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Home;

import React, { useEffect, useState } from 'react';

const Home = () => {
    const [sections, setSections] = useState([]);

    useEffect(() => {
        fetch('/sections')
            .then(response => response.json())
            .then(data => {
                // console.log(data.sections)
                setSections(data.sections)
            })
            .catch(error => console.error('Error fetching sections:', error));
    }, []);

    return (
        <div>
            <h1>PLop</h1>
            <table>
                <tbody>
                    {sections.map(section => (
                        <React.Fragment>
                            <tr key={section.id}>
                                <td>{section.title}</td>
                                <td>{section.description}</td>
                            </tr>
                            {section.categories.map(category => (
                                <React.Fragment>
                                <tr key={category.id}>
                                    <td>{category.title}</td>
                                    <td>{category.description}</td>
                                </tr>
                                {category.threads.map(thread => (
                                    <tr key={thread.id}>
                                        <td>{thread.title}</td>
                                    </tr>
                                ))}
                                </React.Fragment>
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;