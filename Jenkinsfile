pipeline {
  agent any

  environment {
    COMPOSE_PROJECT_NAME = 'myfullstackapp'
  }

  stages {

    stage('Checkout') {
      steps {
        git 'https://github.com/asriemok/my-fullstack-app.git'
      }
    }

    stage('Build & Run with Docker Compose') {
      steps {
        script {
          echo "Starting Docker Compose build..."
          sh 'docker-compose down'
          sh 'docker-compose build'
          sh 'docker-compose up -d'
        }
      }
    }

    stage('Check Running Containers') {
      steps {
        sh 'docker ps -a'
      }
    }
  }

  post {
    success {
      echo "✅ Deployment successful!"
    }
    failure {
      echo "❌ Build failed."
    }
  }
}
