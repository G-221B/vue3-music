/**
 * feat：新功能
 * fix：修补某功能的bug
 * build: 修改项目构建系统(例如 webpack，cli 的配置等)的提交
 * refactor：重构某个功能
 * style：仅样式改动
 * docs：仅文档新增/改动
 * chore：构建过程或辅助工具的变动
 * ci: 主要目的是修改项目继续集成流程
 * perf: 性能, 体验优化
 * test: 测试某功能、新增测试用例、更新现有测试
 * revert: 回退到上一个版本
 */
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'build',
                'refactor',
                'style',
                'docs',
                'chore',
                'ci',
                'perf',
                'test',
                'revert',
            ],
        ],
        'type-case': [0],
        'type-empty': [0],
        'scope-empty': [0],
        'scope-case': [0],
        'subject-full-stop': [0, 'never'],
        'subject-case': [0, 'never'],
        'header-max-length': [0, 'always', 72],
        'body-max-line-length': [0, 'always', 200],
    },
};
