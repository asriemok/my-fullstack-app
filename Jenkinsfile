pipeline {
  agent any

  environment {
    COMPOSE_PROJECT_NAME = 'myfullstackapp'
  }

  stages {
    stage('Checkout Code') {
      steps {
        git branch: 'main', url: 'https://github.com/asriemok/my-fullstack-app.git'
      }
    }

    stage('Build and Run Docker Compose') {
      steps {
        script {
          echo '🛠️ Building and starting Docker containers...'
          sh 'docker-compose down || true'       // Ensure cleanup doesn't block
          sh 'docker-compose up -d --build'
        }
      }
    }

    stage('Verify Containers') {
      steps {
        echo '🔍 Verifying running containers...'
        sh 'docker ps -a'
      }
    }
  }

  post {
    success {
      echo '✅ Deployment successful!'
    }
    failure {
      echo '❌ Build or deployment failed.'
    }
    always {
      echo '🧹 Cleaning up...'
      sh 'docker-compose down'
    }
  }
}
