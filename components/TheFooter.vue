<template>
    <footer>
        <span>&copy; Dutchwebworks, August 2022</span>
        
        <a href="https://github.com/dutchwebworks/nuxt-learning" target="_blank">
            View on Github

            <img src="/img/icons/github-logo.svg" alt="Github">
        </a>
    </footer>
</template>

<style>
footer {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ddd;
    padding-block-start: 10px;
    margin-block-start: 20px;
    font-size: .8rem;
}

footer > a {
    display: flex;
    gap: 5px;
    align-items: center;
    color: deeppink;
}
</style>