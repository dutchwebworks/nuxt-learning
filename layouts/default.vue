<template>
    <div class="app__container">
        <TheHeader />

        <slot />

        <TheFooter />
    </div>
</template>

<style lang="scss">
    .app__container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .page-enter-active {
        animation: routerSlideIn 0.3s ease-out forwards;
    }

    .page-leave-active {
        animation: routerSlideOut 0.3s ease-out forwards;
    }

    @keyframes routerSlideIn {
        0% {
            opacity: 0;
            transform: translateY(10px);
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes routerSlideOut {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
</style>
