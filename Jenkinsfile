pipeline {
    agent any
    stages {
        stage('Git Checkout') {
            steps {
                git url: 'https://github.com/asriemok/my-fullstack-app.git', branch: 'main'
            }
        }
        stage('List Files') {
            steps {
                sh 'ls -la'
            }
        }
    }
}
